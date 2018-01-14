import { Reducer } from 'redux'
import { IAction } from 'src/base/action'
import { City } from 'src/common/city'
import { Day } from 'src/common/day'
import * as ACTIONS from 'src/history/actions'
import * as SEARCH_ACTIONS from 'src/search/actions'
import * as ITEMS from 'src/search/items'

const INITIAL_HISTORY_STATE: IHistoryStore = {
    days: Array(12),
    cityId: null
};

export function history(state = INITIAL_HISTORY_STATE, action: IAction): IHistoryStore {
    switch (action.type) {
        case ACTIONS.DAYS_REQUEST: {
            const { month } = (action as ACTIONS.IDaysAction).payload;
            return Object.assign<{}, IHistoryStore, Partial<IHistoryStore>>({}, state, {
                days: [
                    ...state.days.slice(0, month - 1),
                    [],
                    ...state.days.slice(month)
                ]
            });
        }
        case ACTIONS.DAYS_RESPONSE: {
            const { month, days } = (action as ACTIONS.IDaysAction).payload;
            return Object.assign<{}, IHistoryStore, Partial<IHistoryStore>>({}, state, {
                days: [
                    ...state.days.slice(0, month - 1),
                    days,
                    ...state.days.slice(month)
                ]
            });
        }
        case ACTIONS.DAYS_ERROR: {
            const { month } = (action as ACTIONS.IDaysAction).payload;
            return Object.assign<{}, IHistoryStore, Partial<IHistoryStore>>({}, state, {
                days: [
                    ...state.days.slice(0, month - 1),
                    action.error as any,
                    ...state.days.slice(month)
                ]
            });
        }
        case SEARCH_ACTIONS.SEARCH_CITY_SELECT: {
            const { city: { id: cityId } } = (action as SEARCH_ACTIONS.ISelectCity).payload;
            if (cityId !== state.cityId)
                return Object.assign<{}, IHistoryStore, IHistoryStore>({}, state, {
                    days: Array(12),
                    cityId
                });
            else
                return state;
        }
        // case SEARCH_ACTIONS.SEARCH_CITY_ID_RESPONSE:
        //     if ((<Actions.Action<ACTIONS.CityAction>><any>action).payload.id !== state.cityId)
        //         return Object.assign<{}, IHistoryStore, IHistoryStore>({}, state, { days: Array(12), cityId: (<Actions.Action<ACTIONS.CityAction>><any>action).payload.id });
        //     else
        //         return state;

        default:
            return state;
    }
}

export interface IHistoryStore {
    days: Day[][];
    cityId: number;
}
