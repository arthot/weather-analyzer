import { CityModel } from './city'
import { City } from 'src/common/city'
import { QueryModel } from './query'
import { Query } from 'src/common/query'
import { CityQueryModel } from './cityQuery'

export function get(lang: string, id: number) {
    return CityModel.query()
        .where({ id, lang })
        .first()
        .then(v => v ? v.toModel() : null)
}

export async function search(query: string, lang: string) {
    const queryId = await QueryModel.query().findOne({ query, lang }).then(v => v ? v.id : null);
    if (queryId) {
        return CityQueryModel.query().where({ queryId }).orderBy('order').eager('city').then(a => a.map(c => c.city));
    }
}

export async function cache(query: Query, cities: City[]) {

    if (await QueryModel.query().findOne({ query: query.query, lang: query.lang }))
        return;

    const qId = await QueryModel.query().insert(query).then(q => q.id);

    const existing = await CityModel.query()
        .where({ lang: query.lang })
        .andWhere('id', 'in', cities.map(c => c.id))
        .then(a => a.map(c => c.id));

    await CityQueryModel.query().insertGraph(
        cities.filter(c => existing
            .some(i => i === c.id))
            .map(c => ({
                cityId: c.id,
                queryId: qId,
                order: cities.findIndex(ci => ci.id === c.id) + 1
            })));

    await CityQueryModel.query().insertGraph(
        cities
            .filter(c => !existing.some(i => i === c.id))
            .map(c => ({
                cityId: c.id,
                queryId: qId,
                city: c,
                order: cities.findIndex(ci => ci.id === c.id) + 1
            })))
}

export function getPreloaded() {
    return CityModel.query()
        .whereExists(q => q.select('1').from('days').whereRaw('cities.id = days.cityId'))
        .then(a => a.map(i => i.toModel()));
}
