import { Model } from 'src/store/objection'
import { Query } from 'src/common/query'

export class QueryModel extends Model {
    readonly id: number;
    query: string;
    lang: string;
    date: number;

    static tableName = 'queries';

    static jsonSchema = {
        type: 'object',
        required: ['lang'],
        properties: {
            id: { type: 'integer' },
            query: { type: 'string', maxLength: 256 },
            lang: { type: 'string', maxLength: 5 },
            date: { type: 'number' }
        }
    }

    toModel() {
        return new Query(
            this.id,
            this.query,
            this.lang,
            this.date
        )
    }
}
