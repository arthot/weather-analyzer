import axios from 'axios'
import { City } from 'src/common/city'

export function fetchCities(lang, text) {
    return axios
        .get(`/api/cities/search/${lang}/${text}`)
        .then(r => r.data as City[]);
}
