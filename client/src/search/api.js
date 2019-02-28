import axios from 'axios'

export function fetchCities(lang, text) {
    return axios
        .get(`/api/cities/search/${lang}/${text}`)
        .then(r => r.data);
}

export function fetchCity(lang, id) {
    return axios
        .get(`/api/cities/${lang}/${id}`)
        .then(r => r.data);
}