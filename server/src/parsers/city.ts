import { City } from 'src/common/city'
import { request } from 'src/utils/request'
import { getLogger } from 'src/utils/log'

const log = getLogger(module);

const CityRegex = new RegExp('[C,M,T]');

export function parse(name: string, lang: string) {
    if (!name) throw new Error('city name should not be empty')
    if (name.length < 2) throw new Error('city name lenght must be not less than 2')

    const url = `https://www.gismeteo.${(lang == 'ru' ? 'ru' : 'com')}/ajax/suggest/?lang=${lang}&startsWith=${name}&sort=typ`

    log.debug('requesting page ', url);

    return request(url)
        .then(r => (<CityApi[]>r.items)
            .filter(c => c.kind && CityRegex.test(c.kind))
            .map(c => new City(
                c.id,
                c.lang,
                { code: c.country_code, name: c.country_name },
                c.kind,
                c.district_name,
                c.name,
                c.sub_district_name
            )))
}

interface CityApi {
    id: number;
    district_id: number;
    sub_district_id: string;
    country_id: number;
    country_code: string;
    kind: string;
    country_name: string;
    district_name: string;
    sub_district_name: string;
    site_name: string;
    name: string;
    lang: string;
    type: string;
}
