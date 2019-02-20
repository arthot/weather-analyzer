import { combineReducers } from 'redux';
import { locale } from './locale/reducer'
import { search } from './search/reducer'

export const store = combineReducers({
    locale,
    search,
})
