import { expect } from 'chai'
import { CityModel } from 'src/store/city/city'
import { City } from 'src/common/city'
import { DayModel } from 'src/store/days/days'
import { Day } from 'src/common/day'

describe('day model', () => {

    before(async () => {
        await CityModel.query().truncate();
        await DayModel.query().truncate();

        await CityModel.query().insert(new City(1, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'name', 'subDistrict'));
    })

    it('should insert and read', async () => {
        const obj = new Day(new Date().toISOString(), 0.2, 0.2, true, 0.2, 1);
        await DayModel.query()
            .insert(obj);

        const result = await DayModel.query().first().then(v => v ? v.toModel() : null);
        expect(result).deep.equal(obj);
    })

    it('should insert with null chance', async () => {
        const obj = new Day(new Date().toISOString(), 0.2, 0.2, true, null, 2);
        await DayModel.query()
            .insert(obj);

        const result = await DayModel.query().findById(2).then(v => v ? v.toModel() : null);
        expect(result).deep.equal(obj);
    })

})
