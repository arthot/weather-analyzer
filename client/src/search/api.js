import axios from 'axios'

export function fetchCities(lang, text) {
    return new Promise(r => setTimeout(() => r(
        [{ "id": 118924, "lang": "en", "name": "Timkovichi", "kind": "T", "country": { "code": "BY", "name": "Belarus" }, "district": "Minsk Region", "subDistrict": "Volozhin district" }, { "id": 122345, "lang": "en", "name": "Tikhonova Sloboda", "kind": "T", "country": { "code": "BY", "name": "Belarus" }, "district": "Minsk Region", "subDistrict": "Stolbtsy district" }, { "id": 118926, "lang": "en", "name": "Tishkovschina", "kind": "T", "country": { "code": "BY", "name": "Belarus" }, "district": "Minsk Region", "subDistrict": "Volozhin district" }, { "id": 118925, "lang": "en", "name": "Tikhonovschina", "kind": "T", "country": { "code": "BY", "name": "Belarus" }, "district": "Minsk Region", "subDistrict": "Volozhin district" }, { "id": 120515, "lang": "en", "name": "Timoshki", "kind": "T", "country": { "code": "BY", "name": "Belarus" }, "district": "Minsk Region", "subDistrict": "Minsk district" }, { "id": 122344, "lang": "en", "name": "Tiskovschina", "kind": "T", "country": { "code": "BY", "name": "Belarus" }, "district": "Minsk Region", "subDistrict": "Stolbtsy district" }, { "id": 120050, "lang": "en", "name": "Tikhonovichi", "kind": "T", "country": { "code": "BY", "name": "Belarus" }, "district": "Minsk Region", "subDistrict": "Logoysk district" }]
    ), 300));
    return axios
        .get(`/api/cities/search/${lang}/${text}`)
        .then(r => r.data);
}
