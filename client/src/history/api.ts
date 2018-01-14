import axios from 'axios'
import { Day } from 'src/common/day'

export function fetchHistory(cityId, month) {
    return axios
        .get(`/api/weather/${cityId}/${month}`)
        .then(r => (r.data as Day[]).map(d => { d.date = new Date(d.date as any); return d; }))
}
