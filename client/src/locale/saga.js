import { call, takeEvery } from 'redux-saga/effects'
import i18 from './i18n'
import { setLocale } from './manager'
import * as Actions from './actions'

function* handleLanguageChange(action) {
    const { locale } = action.payload;

    setLocale(locale);

    yield call(() => i18(locale));
}

export function* watchLanguage() {
    yield takeEvery(Actions.LOCALE_CHANGED, handleLanguageChange);
}
