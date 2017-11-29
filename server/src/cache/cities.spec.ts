import { expect } from 'chai'
import * as _ from 'lodash'
import { City } from 'src/common/city'
import * as Service from 'src/store/city/service'
import { CityModel } from 'src/store/city/city'
import { QueryModel } from 'src/store/city/query'
import { CityQueryModel } from 'src/store/city/cityQuery'
import * as Cacher from './cities'

describe('cities cacher', () => {

    const LANG = 'en';

    beforeEach(async () => {
        await CityModel.query().truncate();
        await QueryModel.query().truncate();
        await CityQueryModel.query().truncate();
    })

    it('should cache single', async () => {
        const query = 'SINGLE query';
        const cityId = 25;

        const cities = [
            new City(cityId, LANG, { code: 'by', name: 'bu' }, 'T', 'obl', 'for query 1', 'sub')
        ]

        await Cacher.cache(query, LANG, cities);

        const result = await Service.search(query, LANG)

        expect(result.length).eq(1);
        expect(result[0].id).eq(cityId);
    })

    it('should cache in queue', async () => {
        const count = 5;
        const cities = 5;

        await Promise.all(
            _.range(1, count + 1).map(i =>
                Cacher.cache(`query ${i}`, LANG,
                    _.range(0, cities).map(n => new City(100 * i + n, LANG, { code: 'b', name: 'b' }, 'T', 'obl', `query ${i} ${n}`, 'sub')))
            )
        );

        expect(await CityModel.query().count().then(r => r[0]['count(*)'])).eq(cities * count);
        expect(await QueryModel.query().count().then(r => r[0]['count(*)'])).eq(count);
    })

    it('should cache a few from similar results', async () => {
        const count = 3;
        const cities = 5;

        await Promise.all(
            _.range(1, count + 1).map(i =>
                Cacher.cache(`real query ${i}`, LANG,
                    _.range(0, cities).map(n => new City(i + n, LANG, { code: 'b', name: 'b' }, 'T', 'obl', `query ${i} ${n}`, 'sub')))
            )
        );

        expect(await QueryModel.query().count().then(r => r[0]['count(*)'])).eq(count);
        expect(await CityQueryModel.query()
            .join('queries', 'city_query.queryId', 'queries.id')
            .where('queries.query', 'LIKE', 'real query%')
            .count().then(r => r[0]['count(*)'])).eq(cities * count);
        expect(await CityModel.query().count().then(r => r[0]['count(*)'])).lessThan(cities * count);
    })

    it('should cache in right order', async () => {
        const query = 'right order';
        const cityId = 23;

        const cities = [
            new City(cityId, LANG, { code: 'by', name: 'bu' }, 'T', 'obl', 'for ordered query', 'sub'),
            new City(cityId - 2, LANG, { code: 'by', name: 'bu' }, 'T', 'obl', 'for ordered query', 'sub')
        ]

        await Cacher.cache(query, LANG, cities);

        const result = await Service.search(query, LANG)

        expect(result.length).eq(2);
        expect(result[0].id).eq(cityId);
    })

    it('should cache for multiple languages', async () => {
        const query = 'languages';
        const cityId = 11;
        const EN = 'en';
        const RU = 'ru';

        const citiesEn = [
            new City(cityId, EN, { code: 'by', name: 'bu' }, 'T', 'obl', EN, 'sub')
        ]

        const citiesRu = [
            new City(cityId, RU, { code: 'by', name: 'bu' }, 'T', 'obl', RU, 'sub')
        ]

        await Cacher.cache(query, EN, citiesEn);
        await Cacher.cache(query, RU, citiesRu);

        const resultEn = await Service.search(query, EN);
        const resultRu = await Service.search(query, RU);

        expect(resultEn.length).eq(1);
        expect(resultEn[0].name).eq(EN);

        expect(resultRu.length).eq(1);
        expect(resultRu[0].name).eq(RU);
    })

})
