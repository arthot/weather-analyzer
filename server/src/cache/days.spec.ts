import { expect } from 'chai'
import * as _ from 'lodash'
import * as proxyquire from 'proxyquire'
import { getDaysInMonth } from 'date-fns'
import { City } from 'src/common/city'
import * as CityService from 'src/store/city/service'
import * as DaysService from 'src/store/days/service'
import { CityModel } from 'src/store/city/city'
import { QueryModel } from 'src/store/city/query'
import { CityQueryModel } from 'src/store/city/cityQuery'
import { DayModel } from 'src/store/days/days'
import { Day } from 'src/common/day'
import * as Cacher from './days'

describe('days cacher', () => {

    beforeEach(async () => {
        await CityModel.query().truncate();
        await QueryModel.query().truncate();
        await CityQueryModel.query().truncate();
        await DayModel.query().truncate();
    })

    it('should return valid years range', async () => {
        const prev = Cacher.getYearsRange(new Date().getMonth() - 1);

        expect(_.last(prev)).eq(new Date().getFullYear());
        expect(prev.length).eq(Cacher.YEARS_DEPTH);

        const curr = Cacher.getYearsRange(new Date().getMonth());

        expect(_.last(curr)).eq(new Date().getFullYear());
        expect(curr.length).eq(Cacher.YEARS_DEPTH);

        const next = Cacher.getYearsRange(new Date().getMonth() + 1);

        expect(_.last(next)).eq(new Date().getFullYear() - 1);
        expect(next.length).eq(Cacher.YEARS_DEPTH - 1);
    })

    it('should load a month', async () => {
        const city = 4248;
        const month = new Date().getMonth();
        const max = 21;

        await CityModel.query().insert(new City(4248, 'en', { code: 'code', name: 'name' }, 'kind', 'distinct', 'name', 'subdistinct'));

        const Cacher = proxyquire.load('./days', {
            'src/parsers/day': {
                'parse': (cityId, year) => Promise.resolve(
                    _.range(1, max).map(d => new Day(new Date(Date.UTC(year, month - 1, d)).toISOString(), 1, 0, true, 0, city))
                )
            }
        });

        await Cacher.cache(city, month);

        expect(new Date(await DaysService.getLastCachedDay(city, month)).getDate()).eq(max - 1);
    })

    it('should load only new data', async () => {
        const city = 4248;
        const month = new Date().getMonth();
        const monthPart1 = 25;

        let Cacher = proxyquire.noPreserveCache().load('./days', {
            'src/parsers/day': {
                'parse': (cityId, year) => Promise.resolve(
                    _.range(1, monthPart1).map(d => new Day(new Date(Date.UTC(year, month - 1, d)).toISOString(), 1, 0, true, 0, city))
                )
            }
        });

        await Cacher.cache(city, month);

        expect(new Date(await DaysService.getLastCachedDay(city, month)).getDate()).eq(monthPart1 - 1);


        const monthPart2 = getDaysInMonth(month);
        Cacher = proxyquire.noPreserveCache().load('./days', {
            'src/parsers/day': {
                'parse': (cityId, year) => new Promise((r, e) => {
                    if (year <= new Date().getFullYear() - 2)
                        e(new Error('Cacher should not load already partialy cached data'));
                    else r(
                        _.range(1, monthPart2).map(d => new Day(new Date(Date.UTC(year, month - 1, d)).toISOString(), 1, 0, true, 0, city))
                    );
                })
            }
        });

        await Cacher.cache(city, month);

        expect(new Date(await DaysService.getLastCachedDay(city, month)).getDate()).eq(monthPart2 - 1);

        Cacher = proxyquire.noPreserveCache().load('./days', {
            'src/parsers/day': {
                'parse': (cityId, year) => Promise.reject('Cacher should not load already cached data')
            }
        });

        await Cacher.cache(city, month);

        expect(new Date(await DaysService.getLastCachedDay(city, month)).getDate()).eq(monthPart2 - 1);
    })

})