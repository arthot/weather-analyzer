import { all, fork } from 'redux-saga/effects'
import { watchLanguage } from './locale/saga'
import { watchMonthChange, watchSearchInput, watchCitySelection } from './search/saga'

export default function* rootSaga() {
    yield all([
        fork(watchSearchInput),
        fork(watchMonthChange),
        fork(watchLanguage),
        fork(watchCitySelection),
    ])
}
