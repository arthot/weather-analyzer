import { expect } from 'chai'
import { CityQueryModel } from './cityQuery'
import { CityModel } from './city'
import { QueryModel } from './query'
import { City } from 'src/common/city'
import { Query } from 'src/common/query'


describe('city query model', () => {

    let qId: number;

    before(async () => {
        await CityModel.query().truncate();
        await CityQueryModel.query().truncate();
        await CityModel.query().insert(new City(1, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'name', 'subdistinct'));
        qId = (await QueryModel.query().insert(new Query(undefined, 'query', 'lang', Date.now()))).id;
    })

    it('should insert and read', async () => {
        const obj = { cityId: 1, queryId: qId, order: 10 };
        await CityQueryModel.query()
            .insert(obj);

        const result = await CityQueryModel.query().first().then(v => v ? v.toModel() : null);

        expect(result).deep.equal(obj);
    })

})
