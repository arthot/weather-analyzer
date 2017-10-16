import { expect } from 'chai'
import { parse } from './city'

describe('city parser', () => {
    it('should throws on empty', () => {
        expect(parse.bind(null, '', '')).to.throw();
    })

    it('should throws on low length', () => {
        expect(parse.bind(null, '1', '')).to.throw();
    })

    it('should parse city', async () => {
        const result = await parse('London', 'en');
        expect(result).is.not.empty;

        const city = result[0];
        expect(city.name).eq('London');
        expect(city.country.code).is.not.empty;
        expect(city.country.name).is.not.empty;
        expect(city.district).is.not.empty;
        expect(city.id).is.greaterThan(0);
        expect(city.kind).is.not.empty;
        expect(city.lang).is.not.empty;
    })
})
