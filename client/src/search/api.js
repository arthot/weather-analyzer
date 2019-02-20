import axios from 'axios'

export function fetchCities(lang, text) {
    return axios
        .get(`/api/cities/search/${lang}/${text}`)
        .then(r => r.data);
}
