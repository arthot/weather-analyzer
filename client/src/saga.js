import { all, fork } from 'redux-saga/effects'
import * as lang from './locale/saga'
import * as search from './search/saga'
import * as weather from './weather/saga'

const searchSagas = [
    search.watchMonthChange,
    search.watchSearchInput,
    search.watchCitySelection,
    search.watchWeatherLoad,
]

const langSagas = [
    lang.watchLanguage,
    lang.watchWeatherLoad,
]

const weatherSagas = [
    weather.watchWeatherLoad,
    weather.watchCityChange,
    weather.watchPageLoad,
]

export default function* rootSaga(context = {}) {
    yield all([...searchSagas, ...langSagas, ...weatherSagas].map(sg => fork(sg, context)))
}
