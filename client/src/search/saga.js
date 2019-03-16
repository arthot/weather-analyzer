import { call, put, select, takeEvery, takeLatest, delay } from 'redux-saga/effects'
import slugify from '@sindresorhus/slugify'
import qs from 'query-string'
import * as Actions from './actions'
import { WEATHER_PAGE_LOADED } from '../weather/actions'
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

function generateCityUrl(city) {
    return `/${city.lang}/${slugify(city.name)}/${city.id}`;
}

function* handleCitySelect(router, action) {
    const { city } = action.payload;

    const url = generateCityUrl(city);
    if (router.location.pathname === '/') {
        yield delay(400);
        router.push(url);
    } else {
        router.replace(url);
    }
}

export function* watchCitySelection({ router }) {
    yield takeEvery(Actions.SEARCH_CITY_SELECT, handleCitySelect.bind(null, router));
}

function* handleMonthChange(router, action) {
    const { month } = action.payload;
    const { mode } = yield select(s => s.weather);

    const query = qs.stringify({ mode });
    router.replace('?' + query + '#' + month);
}

export function* watchMonthChange({ router }) {
    yield takeEvery(Actions.SEARCH_MONTH_SELECT, handleMonthChange.bind(null, router));
}

function* handleWeatherLoad(action) {
    const city = yield select(s => s.search.selected);
    if (!city || action.cityId !== city.id) {
        yield call(getCity, action.payload.locale, action.payload.cityId)
    }
}

function* getCity(lang, id) {
    yield put({
        type: Actions.SEARCH_CITY_ID_REQUEST
    })

    try {
        const city = yield api.fetchCity(lang, id);
        yield put({
            type: Actions.SEARCH_CITY_ID_RESPONSE,
            payload: { city }
        });
    } catch (e) {
        yield put({
            type: Actions.SEARCH_CITY_ID_ERROR,
            error: e
        })
    }
}

export function* watchWeatherLoad() {
    yield takeEvery(WEATHER_PAGE_LOADED, handleWeatherLoad);
}
