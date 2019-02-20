import { all, fork } from 'redux-saga/effects'
import { watchLanguage } from './lang/saga'
import { watchMonthChange, watchSearchInput } from './search/saga'

export default function* rootSaga() {
    yield all([
        fork(watchSearchInput),
        fork(watchMonthChange),
        fork(watchLanguage),
    ])
}
