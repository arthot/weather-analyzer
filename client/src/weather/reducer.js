import * as ACTIONS from './actions'

const INITIAL_SEARCH_STATE = {
    cityId: 0,
    data: [...Array(12)]
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
            return {
                ...state,
                data: Object.assign([], state.data, {
                    [month - 1]: { loading: false, weather: data }
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
        default:
            return state;
    }
}
