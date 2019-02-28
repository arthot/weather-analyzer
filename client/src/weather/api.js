import axios from 'axios'

export function fetchWeather(cityId, month) {
    return axios
        .get(`/api/weather/${cityId}/${month}`)
        .then(r => r.data);
}
