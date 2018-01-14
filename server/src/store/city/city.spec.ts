import { expect } from 'chai'
import { CityModel } from './city'
import { City } from 'src/common/city'

describe('city model', () => {

    before(async () => {
        await CityModel.query().truncate();
    })

    it('should insert and read', async () => {
        const obj = new City(1, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'name', 'subDistrict');
        await CityModel.query()
            .insert(obj);

        const result = await CityModel.query().findOne({ id: 1 }).then(v => v ? v.toModel() : null);
        obj.id = result.id;

        expect(result).deep.equal(obj);
    })


    it('should insert and read with nulls', async () => {
        const obj = new City(2, 'en', { code: 'code', name: 'name' }, 'kind', null, 'name', null);
        await CityModel.query()
            .insert(obj);

        const result = await CityModel.query().findOne({ id: 2 }).then(v => v ? v.toModel() : null);
        obj.id = result.id;

        expect(result).deep.equal(obj);
    })

})
