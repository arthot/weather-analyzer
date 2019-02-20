import { combineReducers } from 'redux';
import { lang } from './lang/reducer'
import { search } from './search/reducer'

export const store = combineReducers({
    lang,
    search,
})
