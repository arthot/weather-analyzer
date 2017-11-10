import { expect } from 'chai'
import * as Service from './service'
import { CityModel } from './city'
import { City } from 'src/common/city'
import { QueryModel } from './query'
import { Query } from 'src/common/query'
import { CityQueryModel } from './cityQuery'
import { DayModel } from 'src/store/days/days'

describe('city service', () => {

    const city = new City(22, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'name', 'subdistinct');
    const query = new Query(undefined, 'query', 'en', Date.now());

    before(async () => {
        await CityModel.query().truncate();
        await QueryModel.query().truncate();
        await CityQueryModel.query().truncate();

        const c = await CityModel.query().insert(city);
        const q = await QueryModel.query().insert(query);
        await CityQueryModel.query().insert({ cityId: c.id, queryId: q.id, order: 1 });
        city.id = c.id;
    })

    it('should insert and read', async () => {
        const result = await Service.get('en', city.id);

        expect(result).deep.equal(city);
    })

    it('should search by query', async () => {
        const result = await Service.search('query', 'en');

        expect(result).is.an('array');
        expect(result.length).eq(1);
        expect(result[0].lang).eq('en');
    })

    it('should cache multiple cities for one query', async () => {
        const q1 = new Query(undefined, 'qt1', 'en', Date.now());
        const c1 = new City(2, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'ct1', '');
        const c2 = new City(3, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'ct2', '');

        await Service.cache(q1, [c1, c2]);
        const result = await Service.search(q1.query, q1.lang);

        expect(result).is.an('array');
        expect(result.length).eq(2);
        expect(result[0].name).eq('ct1');
        expect(result[1].name).eq('ct2');
    })

    it('should ignore duplicates', async () => {
        const ID = 4;
        const q2 = new Query(undefined, 'qt2', 'en', Date.now());
        const c1 = new City(ID, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'ct1', '');

        await Service.cache(q2, [c1]);
        let result = await Service.search(q2.query, q2.lang);

        expect(result).is.an('array');
        expect(result.length).eq(1);
        expect(result[0].id).eq(ID);

        await Service.cache(q2, [c1]);
        result = await Service.search(q2.query, q2.lang);

        expect(result).is.an('array');
        expect(result.length).eq(1);
        expect(result[0].id).eq(ID);
    })

    it('should cache one city for multiple query', async () => {
        const q4 = new Query(undefined, 'qt4', 'en', Date.now());
        const q5 = new Query(undefined, 'qt5', 'en', Date.now());
        const c5 = new City(5, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'ct5', '');

        await Service.cache(q4, [c5]);
        let result = await Service.search(q4.query, q4.lang);

        expect(result).is.an('array');
        expect(result.length).eq(1);
        expect(result[0].id).eq(5);

        await Service.cache(q5, [c5]);
        result = await Service.search(q5.query, q5.lang);

        expect(result).is.an('array');
        expect(result.length).eq(1);
        expect(result[0].id).eq(5);
    })

    it('should cache multiple cities for one query', async () => {
        const c23 = new City(23, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'ct1', '');
        await CityModel.query().insert(c23);

        await DayModel.query().truncate();
        await DayModel.query().insert({
            cityId: 23,
            date: new Date().toISOString()
        });

        const result = await Service.getPreloaded();

        expect(result).is.an('array');
        expect(result.length).eq(1);
        expect(result[0].id).eq(23);
    })

})
