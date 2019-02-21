import { call, put, select, takeEvery, takeLatest, delay } from 'redux-saga/effects'
import * as Actions from './actions'
import * as api from './api'

function* getCities(lang, text) {
    yield put({
        type: Actions.SEARCH_CITIES_REQUEST
    })

    try {
        const items = yield api.fetchCities(lang, text);
        yield put({
            type: Actions.SEARCH_CITIES_RESPONSE,
            payload: { items }
        });
    } catch (e) {
        yield put({
            type: Actions.SEARCH_CITIES_ERROR,
            error: e
        })
    }
}

function* handleInput(action) {
    yield delay(500);

    const { text } = action.payload;
    if (text.length < 2)
        return;

    const lang = yield select(s => s.locale.substring(0, 2));

    yield call(getCities, lang, text);
}

export function* watchSearchInput() {
    yield takeLatest(Actions.SEARCH_INPUT_CHANGED, handleInput);
}

function* handleCitySelect(action) {
    const { city } = action.payload;
    const lang = yield select(s => s.lang);
    yield put(history.replace(`/${lang}/${city.name}-${city.id}/`));
}

export function* watchCitySelection() {
    yield takeEvery(Actions.SEARCH_CITY_SELECT, handleCitySelect);
}

function handleMonthChange(action) {
    const { month } = action.payload;
    window.location.hash = month;
}

export function* watchMonthChange() {
    yield takeEvery(Actions.SEARCH_MONTH_SELECT, handleMonthChange);
}
