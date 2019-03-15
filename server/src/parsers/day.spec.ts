import { expect } from 'chai'
import * as proxyquire from 'proxyquire'
import { parse } from './day'

describe('days parser', () => {
    it('should parse days for Vileyka city', async () => {
        const result = await parse(4233, 2013, 8);

        expect(result).is.an('array');
        expect(result.length).eq(17);

        const dayAt = result.find(d => new Date(Date.parse(d.date)).getDate() === 20);

        expect(dayAt.date).eq('2013-08-20');
        expect(dayAt.cityId).eq(4233);
        expect(dayAt.temperature).eq(26);
        expect(dayAt.cloudiness).eq(0.5);
        expect(dayAt.fallout).eq(false);
    })

    it('should parse days for Minsk city', async () => {
        const result = await parse(4248, 2014, 9);
        const dayAt = result.find(d => new Date(Date.parse(d.date)).getDate() === 10);

        expect(dayAt.date).eq('2014-09-10');
        expect(dayAt.cityId).eq(4248);
        expect(dayAt.temperature).eq(16);
        expect(dayAt.cloudiness).eq(1);
        expect(dayAt.fallout).eq(true);
    })

    it('should skip invalid data for Kemer city', async () => {
        const result = await parse(73228, 2014, 7);
        const dayAt = result.find(d => new Date(Date.parse(d.date)).getDate() === 30);

        expect(dayAt.date).eq('2014-07-30');
        expect(dayAt.cityId).eq(73228);
        expect(dayAt.temperature).eq(36);
        expect(dayAt.cloudiness).eq(0);
        expect(dayAt.fallout).eq(false);
    })

    it('should return no data for empty page', async () => {
        const result = await parse(73228, 2006, 7);

        expect(result).is.empty;
    })

    it('should silently handle error', async () => {
        const mockParser = proxyquire.noPreserveCache().noCallThru().load('./day', {
            'cheerio': {
                'load': () => {
                    return () => ({
                        toArray: () => [{}],
                        find: () => { throw new Error('this error should be handled') },
                        html: () => { 'the error was handled' }
                    })
                }
            },
            'src/utils/request': {
                'requestPage': () => Promise.resolve()
            }
        });

        await mockParser.parse(1, 1, 1);
    })
})
