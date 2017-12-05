import { expect } from 'chai'
import * as proxyquire from 'proxyquire'
import * as ProviderType from './days'

describe('days provider', () => {

    it('should return cached values', async () => {
        const days = [{ date: '2017-01-01T01:01:01.01Z' }];
        const Provider = proxyquire.load<typeof ProviderType>('./days', {
            'src/store/days/service': {
                'get': async (cityId, month, minYear) => {
                    expect(minYear).lessThan(new Date().getFullYear() - 3);
                    return days;
                }
            },
            'src/cache/days': {
                'cache': () => { }
            }
        });

        const result = await Provider.get(1, 1);

        expect(result).eq(days);
    })

})
