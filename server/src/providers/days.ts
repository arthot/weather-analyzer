import * as Service from 'src/store/days/service'
import * as Cacher from 'src/cache/days'

export async function get(cityId: number, month: number) {
    await Cacher.cache(cityId, month);
    return Service.get(cityId, month, new Date().getFullYear() - Cacher.YEARS_DEPTH + 1);
}
