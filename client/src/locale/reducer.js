import * as ACTIONS from './actions'
import { getLocale } from './manager'

const INITIAL_STATE = getLocale();

export function locale(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTIONS.LOCALE_CHANGED:
            return action.payload.locale;
        default:
            return state;
    }
}
