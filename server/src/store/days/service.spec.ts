import { expect } from 'chai'
import * as Service from './service'
import { CityModel } from 'src/store/city/city'
import { City } from 'src/common/city'
import { DayModel } from 'src/store/days/days'
import { Day } from 'src/common/day'

describe('days service', () => {

    const city = new City(1, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'name', 'subDistrict');

    before(async () => {
        await CityModel.query().truncate();
        await CityModel.query().insert(city);
        await DayModel.query().truncate();
        await Service.save([
            new Day(new Date(Date.UTC(2015, 0, 1)).toISOString(), 0, 0, true, 0, 1),
            new Day(new Date(Date.UTC(2016, 3, 4)).toISOString(), 0, 0, true, 0, 1),
            new Day(new Date(Date.UTC(2015, 1, 22)).toISOString(), 0, 0, true, 0, 1),
            new Day(new Date(Date.UTC(2015, 1, 12)).toISOString(), 0, 0, true, 0, 1),
        ]);
    })

    it('should get all', async () => {
        const result = await Service.get(1, 2, 2010);

        expect(result.length).eq(2);
    })

    it('should get for last year', async () => {
        const result = await Service.get(1, 4, 2016);

        expect(result.length).eq(1);
    })

    it('should get last cached day', async () => {
        const result = await Service.getLastCachedDay(1, 2);

        expect(new Date(Date.parse(result)).getDate()).eq(22);
    })

    it('should get last cached day for not existsing data', async () => {
        const result = await Service.getLastCachedDay(11, 2);

        expect(result).is.null;
    })

})
