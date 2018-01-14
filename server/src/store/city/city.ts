import { Model } from 'src/store/objection'
import { City } from 'src/common/city'

export class CityModel extends Model {
    readonly id: number;
    lang: string;
    name: string;
    kind: string;
    country: {
        code: string,
        name: string
    };
    district: string;
    subDistrict: string;

    static tableName = 'cities';
    static idColumn = ['id', 'lang'];

    static jsonSchema = {
        type: 'object',
        required: ['lang'],
        properties: {
            id: { type: 'integer' },
            lang: { type: 'string', maxLength: 5 },
            name: { type: 'string', maxLength: 256 },
            kind: { type: 'string', maxLength: 256 },
            country: {
                type: 'object',
                properties: {
                    code: { type: 'string' },
                    name: { type: 'string' },
                }
            },
            district: { type: 'string', maxLength: 256 },
            subDistrict: { type: 'string', maxLength: 256 }
        }
    }

    toModel() {
        return new City(
            this.id,
            this.lang,
            this.country,
            this.kind,
            this.district,
            this.name,
            this.subDistrict
        )
    }
}
