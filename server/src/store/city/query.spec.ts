import { expect } from 'chai'
import { QueryModel } from './query'
import { Query } from 'src/common/query'

describe('query model', () => {

    before(async () => {
        await QueryModel.query().truncate();
    })

    it('should insert and read', async () => {
        const obj = new Query(undefined, 'query', 'lang', Date.now());
        await QueryModel.query()
            .insert(obj);

        const result = await QueryModel.query().first().then(v => v ? v.toModel() : null);
        obj.id = result.id;

        expect(result).deep.equal(obj);
    })

})
