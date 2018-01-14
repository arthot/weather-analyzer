import { replace } from 'react-router-redux'
import { delay } from 'redux-saga'
import { call, cancel, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { City } from 'src/common/city'
import { IAppStore } from 'src/reducers'
import * as Actions from 'src/search/actions'
import * as api from 'src/search/api'
import { SearchItem } from 'src/search/items';

function* getCities(lang: string, text: string) {
    yield put<Actions.ISearchCity>({
        type: Actions.SEARCH_CITIES_REQUEST
    })

    try {
        const items = yield api.fetchCities(lang, text);
        yield put<Actions.ISearchCity>({
            type: Actions.SEARCH_CITIES_RESPONSE,
            payload: { items }
        });
    } catch (e) {
        yield put<Actions.ISearchCity>({
            type: Actions.SEARCH_CITIES_ERROR,
            error: e
        })
    }
}

function* handleInput(action: Actions.IChangeSearchInput) {
    yield call(delay, 500);

    const { text } = action.payload;
    if (text.length < 2)
        return;

    const lang = yield select<IAppStore>(s => s.lang);

    yield call(getCities, lang, text);
}

export function* watchSearchInput() {
    yield takeLatest(Actions.SEARCH_INPUT_CHANGED, handleInput);
}

function* handleCitySelect(action) {
    const { city } = action.payload;
    const lang = yield select<IAppStore>(s => s.lang);
    yield put(replace(`/${lang}/${city.name}-${city.id}/`));
}

export function* watchCitySelection() {
    yield takeEvery(Actions.SEARCH_CITY_SELECT, handleCitySelect);
}

function* handleMonthChange(action) {
    const { month } = action.payload;
    window.location.hash = month;
}

export function* watchMonthChange() {
    yield takeEvery(Actions.SEARCH_MONTH_SELECT, handleMonthChange);
}
