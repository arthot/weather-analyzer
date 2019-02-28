import { call, takeEvery, select } from 'redux-saga/effects'
import i18 from './i18n'
import { setLocale } from './manager'
import * as Actions from './actions'
import { WEATHER_PAGE_LOADED } from '../weather/actions'

function* handleLanguageChange(action) {
    const { locale } = action.payload;

    setLocale(locale);

    yield call(() => i18(locale));
}

export function* watchLanguage() {
    yield takeEvery(Actions.LOCALE_CHANGED, handleLanguageChange);
}

function* handleWeatherLoad(action) {
    const locale = yield select(s => s.locale);

    if (!locale.includes(action.payload.locale)) {
        yield call(handleLanguageChange, action);
    }
}

export function* watchWeatherLoad() {
    yield takeEvery(WEATHER_PAGE_LOADED, handleWeatherLoad);
}
