import { all, fork } from 'redux-saga/effects'
import { watchLanguage } from 'src/lang/saga'
import { watchMonthChange, watchSearchInput } from 'src/search/saga'

export default function* rootSaga() {
    yield all([
        fork(watchSearchInput),
        fork(watchMonthChange),
        fork(watchLanguage),
    ])
}
