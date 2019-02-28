import { all, fork } from 'redux-saga/effects'
import * as lang from './locale/saga'
import * as search from './search/saga'

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

export default function* rootSaga(context = {}) {
    yield all([...searchSagas, ...langSagas].map(sg => fork(sg, context)))
}
