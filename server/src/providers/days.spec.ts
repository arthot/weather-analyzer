import { expect } from 'chai'
import * as proxyquire from 'proxyquire'
import * as ProviderType from './days'

describe('days provider', () => {

    it('should return cached values', async () => {
        const Provider = proxyquire.load<typeof ProviderType>('./days', {
            'src/store/days/service': {
                'get': async (cityId, month, minYear) => {
                    expect(minYear).lessThan(new Date().getFullYear() - 3);
                    return [{ date: '2017-01-01', cityId: 12 }];
                }
            },
            'src/cache/days': {
                'cache': () => { }
            }
        });

        const result = await Provider.get(1, 1);

        expect(result).deep.eq({ '2017-01-01': { date: '2017-01-01', cityId: 12 } })
    })

})
