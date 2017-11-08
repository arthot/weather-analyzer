import { Model } from 'src/store/objection'
import { City } from 'src/common/city'
import { Query } from 'src/common/query'

export class CityQueryModel extends Model {
    cityId: number;
    queryId: number;
    order: number;

    readonly city: City;
    readonly query: Query;

    static tableName = 'city_query';

    static relationMappings = {
        city: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./city').CityModel,
            join: {
                from: 'city_query.cityId',
                to: 'cities.id'
            }
        },
        query: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./query').QueryModel,
            join: {
                from: 'city_query.queryId',
                to: 'queries.id'
            }
        },
    }

    static jsonSchema = {
        type: 'object',
        required: ['cityId', 'queryId', 'order'],
        properties: {
            cityId: { type: 'number' },
            queryId: { type: 'number' },
            order: { type: 'number' }
        }
    }

    toModel() {
        return {
            cityId: this.cityId,
            queryId: this.queryId,
            order: this.order
        }
    }
}
