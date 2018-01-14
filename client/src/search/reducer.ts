import { Reducer } from 'redux'
import { IAction } from 'src/base/action';
import { City } from 'src/common/city'
import * as ACTIONS from 'src/search/actions'
import * as ITEMS from 'src/search/items'

const INITIAL_SEARCH_STATE: ISearchStore = {
    isFetching: false,
    items: [],
    month: new Date().getMonth() + 1,
    selected: null,
};

export function search(state = INITIAL_SEARCH_STATE, action: IAction): ISearchStore {
    switch (action.type) {
        case ACTIONS.SEARCH_INPUT_CHANGED: {
            const { text } = (action as ACTIONS.IChangeSearchInput).payload;
            if (text.length === 0)
                return Object.assign({}, state, { items: [] });
            else if (text.length > 0 && text.length < 2)
                return Object.assign({}, state, { items: [new ITEMS.HintSearchItem('low_chars_hint')] });
            else
                return Object.assign({}, state, { items: state.items.filter(i => i.type !== ITEMS.SearchItemType.Hint) });
        }
        case ACTIONS.SEARCH_CITIES_REQUEST:
            return Object.assign<{}, ISearchStore, any>({}, state, {
                isFetching: true
            });

        case ACTIONS.SEARCH_CITIES_RESPONSE: {
            const { items } = (action as ACTIONS.ISearchCity).payload;
            return Object.assign<{}, ISearchStore, any>({}, state, {
                isFetching: false,
                items: items.length !== 0 ?
                    items.map(c => new ITEMS.LocationSearchItem(c)) :
                    [new ITEMS.HintSearchItem('empty_results_hint')]
            });
        }
        case ACTIONS.SEARCH_CITIES_ERROR: {
            const { message } = (action as IAction).error
            return Object.assign<{}, ISearchStore, any>({}, state, {
                isFetching: false,
                items: [new ITEMS.ErrorSearchItem(message)]
            });
        }
        case ACTIONS.SEARCH_CITY_SELECT:
            return Object.assign<{}, ISearchStore, any>({}, state, {
                selected: action.payload.city
            });

        case ACTIONS.SEARCH_CITY_CLEAR:
            return Object.assign<{}, ISearchStore, any>({}, state, {
                selected: null
            });

        case ACTIONS.SEARCH_MONTH_SELECT:
            return Object.assign<{}, ISearchStore, any>({}, state, {
                month: action.payload.month
            });

        // case ACTIONS.SEARCH_CITY_ID_RESPONSE:
        //     return Object.assign<{}, ISearchStore, any>({}, state, {
        //         selected: (<Actions.Action<ACTIONS.CityAction>><any>action).payload.city
        //     });

        default:
            return state;
    }
}

export interface ISearchStore {
    isFetching: boolean;
    items: ITEMS.SearchItem[];
    month: number;
    selected: City | null;
}
