import * as ACTIONS from './actions'
import * as ITEMS from './items'

const INITIAL_SEARCH_STATE = {
    isFetching: false,
    items: [],
    month: new Date().getMonth() + 1,
    selected: null,
};

export function search(state = INITIAL_SEARCH_STATE, action) {
    switch (action.type) {
        case ACTIONS.SEARCH_INPUT_CHANGED: {
            const { text } = action.payload;
            if (!text)
                return Object.assign({}, state, { isFetching: false, items: [] });
            else if (text && text.length < 2)
                return Object.assign({}, state, { items: [new ITEMS.HintSearchItem('low_chars_hint')] });
            else
                return Object.assign({}, state, { items: state.items.filter(i => i.type !== ITEMS.SearchItemType.Hint) });
        }
        case ACTIONS.SEARCH_CITIES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case ACTIONS.SEARCH_CITIES_RESPONSE: {
            const { items } = (action).payload;
            return Object.assign({}, state, {
                isFetching: false,
                items: items.length !== 0 ?
                    items.map(c => new ITEMS.LocationSearchItem(c)) :
                    [new ITEMS.HintSearchItem('empty_results_hint')]
            });
        }
        case ACTIONS.SEARCH_CITIES_ERROR: {
            const { message } = action.error
            return Object.assign({}, state, {
                isFetching: false,
                items: [new ITEMS.ErrorSearchItem(message)]
            });
        }
        case ACTIONS.SEARCH_CITY_SELECT:
            return Object.assign({}, state, {
                selected: action.payload.city
            });

        case ACTIONS.SEARCH_CITY_CLEAR:
            return Object.assign({}, state, {
                selected: null
            });

        case ACTIONS.SEARCH_MONTH_SELECT:
            return Object.assign({}, state, {
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
