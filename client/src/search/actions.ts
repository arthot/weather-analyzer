import { IAction } from 'src/base/action'
import { City } from 'src/common/city'

export const SEARCH_INPUT_CHANGED = 'SEARCH_INPUT_CHANGED'
export const SEARCH_CITIES_REQUEST = 'SEARCH_CITIES_REQUEST'
export const SEARCH_CITIES_ERROR = 'SEARCH_CITIES_ERROR'
export const SEARCH_CITIES_RESPONSE = 'SEARCH_CITIES_RESPONSE'
export const SEARCH_CITY_CLEAR = 'SEARCH_CITY_CLEAR'
export const SEARCH_CITY_SELECT = 'SEARCH_CITY_SELECT'
export const SEARCH_MONTH_SELECT = 'SEARCH_MONTH_SELECT'
export const SEARCH_CITY_ID_RESPONSE = 'SEARCH_CITY_ID_RESPONSE'

export type IChangeSearchInput = IAction<{ text: string }>
export type ISearchCity = IAction<{ items: City[] }>
export type ISelectCity = IAction<{ city: City }>
export type ISelectMonth = IAction<{ month: number }>
