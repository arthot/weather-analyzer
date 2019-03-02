import { call, put, select, takeEvery, delay } from 'redux-saga/effects'
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

        if (currentCityId === cityId) {
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
    const { month, cityId } = action.payload;

    const weather = yield select(s => s.weather);

    if (weather.cityId !== cityId)
        return;

    if (!weather.data[month - 1])
        yield call(getWeatherData, cityId, month);
}

export function* watchWeatherLoad() {
    yield takeEvery(Actions.WEATHER_MONTH_VISIBLE, handleMonthShown);
}


function* handleCityChange(action) {
    const { city: { id } } = action.payload;

    const cityId = yield select(s => s.weather.cityId);

    if (cityId !== id)
        yield put({
            type: Actions.WEATHER_RESET_CITY,
            payload: { cityId: id }
        })
}

export function* watchCityChange() {
    yield takeEvery(SEARCH_CITY_SELECT, handleCityChange);
}

const PAGE_LOAD_DELAY = 1500;
let pageLoadTimestamp = Date.now();

function handlePageLoad() {
    pageLoadTimestamp = Date.now();
}

export function* watchPageLoad() {
    yield takeEvery(Actions.WEATHER_PAGE_LOADED, handlePageLoad);
}