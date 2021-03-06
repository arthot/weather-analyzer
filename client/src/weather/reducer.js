import * as ACTIONS from './actions'
import { MODES } from './constants'
import qs from 'query-string'

const query = qs.parse(document.location.search);

const INITIAL_SEARCH_STATE = {
    cityId: 0,
    mode: query.mode || MODES.PRECIPITATION,
    data: [...Array(12)],
}

export function weather(state = INITIAL_SEARCH_STATE, action) {
    switch (action.type) {
        case ACTIONS.WEATHER_MONTH_DATA_REQUEST: {
            const { month } = action.payload;
            return {
                ...state,
                data: Object.assign([], state.data, {
                    [month - 1]: { loading: true }
                })
            }
        }
        case ACTIONS.WEATHER_MONTH_DATA_RESPONSE: {
            const { month, data } = action.payload;
            const weather = data && data.length ? data.reduce((h, y) => h.set(y.year, y.history.reduce((r, d) => r.set(d.day, d), new Map())), new Map()) : new Map();
            return {
                ...state,
                data: Object.assign([], state.data, {
                    [month - 1]: { loading: false, weather }
                })
            }
        }
        case ACTIONS.WEATHER_MONTH_DATA_ERROR: {
            const { month } = action.payload;
            return {
                ...state,
                data: Object.assign([], state.data, {
                    [month - 1]: { loading: false, error: action.error }
                })
            }
        }
        case ACTIONS.WEATHER_RESET_CITY: {
            return {
                ...state,
                cityId: action.payload.cityId,
                data: [...Array(12)]
            }
        }
        case ACTIONS.WEATHER_PAGE_LOADED: {
            return {
                ...state,
                cityId: action.payload.cityId,
            }
        }
        case ACTIONS.WEATHER_MODE_CHANGED: {
            return {
                ...state,
                mode: action.payload.mode,
            }
        }
        default:
            return state;
    }
}
