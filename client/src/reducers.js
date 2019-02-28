import { combineReducers } from 'redux';
import { locale } from './locale/reducer'
import { search } from './search/reducer'
import { weather } from './weather/reducer'

export const store = combineReducers({
    locale,
    search,
    weather,
})
