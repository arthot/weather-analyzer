import { Model } from 'src/store/objection'
import { Day } from 'src/common/day'
import { City } from 'src/common/city'

export class DayModel extends Model {
    readonly id: number;
    public date: string;
    public temperature: number;
    public cloudiness: number;
    public fallout: boolean;
    public chance: number;
    public cityId: number;

    readonly city: City;

    static tableName = 'days';

    static jsonSchema = {
        type: 'object',
        required: ['date'],
        properties: {
            id: { type: 'integer' },
            date: { type: 'timestamp' },
            temperature: { type: 'number' },
            cloudiness: { type: 'number' },
            fallout: { type: 'boolean' },
            chance: { type: ['number', 'null'] },
        }
    }

    $afterGet(context) {
        this.fallout = !!this.fallout;
    }

    toModel() {
        return new Day(
            this.date,
            this.temperature,
            this.cloudiness,
            this.fallout,
            this.chance,
            this.cityId
        )
    }
}
