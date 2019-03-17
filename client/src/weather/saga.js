import { call, put, select, takeEvery, delay } from 'redux-saga/effects'
import qs from 'query-string'
import * as Actions from './actions'
import { SEARCH_CITY_SELECT } from '../search/actions'
import * as api from './api'

function* getWeatherData(cityId, month) {
    yield put({
        type: Actions.WEATHER_MONTH_DATA_REQUEST,
        payload: { month }
    })

    try {
        const data = yield api.fetchWeather(cityId, month);
        const currentCityId = yield select(s => s.weather.cityId);

        if (!currentCityId || currentCityId === cityId) {
            const pageLoadSpan = Date.now() - pageLoadTimestamp;
            if (pageLoadSpan < PAGE_LOAD_DELAY) {
                yield delay(PAGE_LOAD_DELAY - pageLoadSpan); // smoothe page load animation
            }

            yield put({
                type: Actions.WEATHER_MONTH_DATA_RESPONSE,
                payload: { cityId, month, data }
            });
        }
    } catch (e) {
        const currentCityId = yield select(s => s.weather.cityId);

        if (currentCityId === cityId) {
            yield put({
                type: Actions.WEATHER_MONTH_DATA_RESPONSE,
                payload: { cityId, month },
                error: e
            });
        }
    }
}

function* handleMonthShown(action) {
    const { month } = action.payload;

    const weather = yield select(s => s.weather);

    if (!weather.data[month - 1])
        yield call(getWeatherData, weather.cityId, month);
}

export function* watchWeatherLoad() {
    yield takeEvery(Actions.WEATHER_MONTH_VISIBLE, handleMonthShown);
}


function* handleCityChange(action) {
    const { city: { id: newCityId } } = action.payload;

    const { cityId: currentCityId } = yield select(s => s.weather);
    const { month } = yield select(s => s.search);

    if (currentCityId !== newCityId) {
        yield put({
            type: Actions.WEATHER_RESET_CITY,
            payload: { cityId: newCityId }
        });
        yield call(getWeatherData, newCityId, month);
    }
}

export function* watchCityChange() {
    yield takeEvery(SEARCH_CITY_SELECT, handleCityChange);
}

const PAGE_LOAD_DELAY = 1500;
let pageLoadTimestamp = Date.now();

function* handlePageLoad(action) {
    pageLoadTimestamp = Date.now();
    const { month } = yield select(s => s.search);
    const { cityId } = action.payload;

    yield call(getWeatherData, cityId, month);
}

export function* watchPageLoad() {
    yield takeEvery(Actions.WEATHER_PAGE_LOADED, handlePageLoad);
}

function handleModeChange(router, action) {
    const { mode } = action.payload;
    const query = qs.stringify({ mode });
    router.replace('?' + query + document.location.hash);
}

export function* watchModeChange({ router }) {
    yield takeEvery(Actions.WEATHER_MODE_CHANGED, handleModeChange.bind(null, router));
}
