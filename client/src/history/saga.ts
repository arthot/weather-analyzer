import { call, cancel, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { City } from 'src/common/city'
import { Day } from 'src/common/day'
import * as Actions from 'src/history/actions'
import { fetchHistory } from 'src/history/api'
import { IHistoryStore } from 'src/history/reducer'
import { IAppStore } from 'src/reducers'

export function* invalidateDays() {
    const { search: { city, month }, history, lang }:
        { search: { city: City, month: number }, history: IHistoryStore, lang: string } =
        yield select<IAppStore>(s => ({ search: s.search, history: s.history, lang: s.lang }));

    if (!city) return;

    if (!history.days[month - 1]) {
        yield put<Actions.IDaysAction>({
            type: Actions.DAYS_REQUEST,
            payload: { month, days: null }
        });

        try {
            const days: Day[] = yield call(fetchHistory, city.id, lang);
            yield put<Actions.IDaysAction>({
                type: Actions.DAYS_RESPONSE,
                payload: { days, month }
            });
        } catch (e) {
            yield put<Actions.IDaysAction>({
                type: Actions.DAYS_ERROR,
                payload: { month, days: null },
                error: e
            })
        }
    }
}
