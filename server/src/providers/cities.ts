import * as Service from 'src/store/city/service'
import * as Parser from 'src/parsers/city'
import * as Cacher from 'src/cache/cities'

export async function search(query: string, lang: string) {
    let cities = await Service.search(query, lang);
    if (cities == null || !cities.length) {
        cities = await Parser.parse(query, lang);
        Cacher.cache(query, lang, cities);
    }
    return cities;
}

export function get(lang: string, id: number) {
    return Service.get(lang, id);
}
