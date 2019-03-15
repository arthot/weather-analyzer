import * as _ from 'lodash'
import * as Service from 'src/store/days/service'
import * as Cacher from 'src/cache/days'

export async function get(cityId: number, month: number) {
    await Cacher.cache(cityId, month);
    const data = await Service.get(cityId, month, new Date().getFullYear() - Cacher.YEARS_DEPTH + 1);
    return data.reduce((p, c) => { p[c.date] = c; return p }, {});
}
