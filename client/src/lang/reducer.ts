import * as ACTIONS from 'src/lang/actions'
const INITIAL_STATE = 'en';

export function lang(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTIONS.LANGUAGE_CHANGED:
            return action.payload.lang;
        default:
            return state;
    }
}
