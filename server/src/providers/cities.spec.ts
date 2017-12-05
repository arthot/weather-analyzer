import { expect } from 'chai'
import * as proxyquire from 'proxyquire'
import * as ProviderType from './cities'

describe('cities provider', () => {

    it('should return cached values', async () => {
        const cities = [{ id: 123 }];
        const Provider = proxyquire.load<typeof ProviderType>('./cities', {
            'src/store/city/service': {
                'search': () => Promise.resolve(cities)
            },
            'src/parsers/city': {
                'parse': () => Promise.reject(new Error('Parser should not be invoked'))
            },
        });

        const result = await Provider.search('query', 'en');

        expect(result).eq(cities);
    })

    it('should return parsed values', async () => {
        const cities = [{ id: 234 }];
        const Provider = proxyquire.load<typeof ProviderType>('./cities', {
            'src/store/city/service': {
                'search': () => Promise.resolve([])
            },
            'src/parsers/city': {
                'parse': () => Promise.resolve(cities)
            },
            'src/cache/cities': {
                'cache': () => { }
            }
        });

        const result = await Provider.search('query', 'en');

        expect(result).eq(cities);
    })

    it('should get by id', async () => {
        const city = { id: 123 };
        const Provider = proxyquire.load<typeof ProviderType>('./cities', {
            'src/store/city/service': {
                'get': () => Promise.resolve(city)
            }
        });

        const result = await Provider.get('en', 1);

        expect(result).eq(city);
    })

})
