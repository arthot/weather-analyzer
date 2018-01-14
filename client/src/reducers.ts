import { routerReducer, RouterState } from 'react-router-redux'
import { combineReducers } from 'redux'
import { lang } from 'src/lang/reducer'
import { ISearchStore, search } from 'src/search/reducer'

export const store = combineReducers<IAppStore>({
    lang,
    search,
    router: routerReducer
})

export interface IAppStore {
    lang: string;
    search: ISearchStore;
    router: RouterState;
}
