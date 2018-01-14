import { call, cancel, takeEvery } from 'redux-saga/effects'
import i18 from 'src/i18n'
import * as Actions from 'src/lang/actions'

function* handleLanguageChange(action) {
    const { lang } = action.payload;
    yield call(() => i18(lang));
}

export function* watchLanguage() {
    yield takeEvery(Actions.LANGUAGE_CHANGED, handleLanguageChange);
}
