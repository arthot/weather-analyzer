import axios from 'axios'

export function fetchCities(lang, text) {
    return axios
        .get(`/api/city/${lang}/search?query=${text}`)
        .then(r => r.data);
}

export function fetchCity(lang, id) {
    return axios
        .get(`/api/city/${lang}/${id}`)
        .then(r => r.data);
}