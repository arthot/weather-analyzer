import { expect } from 'chai'
import { CityQueryModel } from './cityQuery'
import { CityModel } from './city'
import { QueryModel } from './query'
import { City } from 'src/common/city'
import { Query } from 'src/common/query'


describe('city model', () => {

    before(async () => {
        await CityQueryModel.query().truncate();
        await CityModel.query().insert(new City(1, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'name', 'subdistinct'));
        await QueryModel.query().insert(new Query(undefined, 'query', 'lang', Date.now()));
    })

    it('should insert and read', async () => {
        const obj = { id: 1, cityId: 1, queryId: 1, order: 10 };
        await CityQueryModel.query()
            .insert(obj);

        const result = await CityQueryModel.query().first().then(v => v ? v.toModel() : null);
        obj.id = result.id;

        expect(result).deep.equal(obj);
    })

})
