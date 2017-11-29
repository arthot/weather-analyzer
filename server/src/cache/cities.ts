import * as PQueue from 'p-queue'
import * as Service from 'src/store/city/service'
import { City } from 'src/common/city'
import { Query } from 'src/common/query'

const queue = new PQueue({ concurrency: 1 });

export function cache(query: string, lang: string, cities: City[]) {
    return queue.add(() =>
        Service.cache(new Query(undefined, query, lang, Date.now()), cities)
    )
}
