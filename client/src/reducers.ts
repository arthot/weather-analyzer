import { routerReducer, RouterState } from 'react-router-redux'
import { combineReducers } from 'redux'
import { history, IHistoryStore } from 'src/history/reducer'
import { lang } from 'src/lang/reducer'
import { ISearchStore, search } from 'src/search/reducer'

export const store = combineReducers<IAppStore>({
    history,
    lang,
    search,
    router: routerReducer
})

export interface IAppStore {
    history: IHistoryStore,
    lang: string;
    search: ISearchStore;
    router: RouterState;
}
