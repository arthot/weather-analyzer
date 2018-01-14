import { IAction } from 'src/base/action'
import { Day } from 'src/common/day'

export const DAYS_REQUEST = 'DAYS_REQUEST';
export const DAYS_RESPONSE = 'DAYS_RESPONSE';
export const DAYS_ERROR = 'DAYS_ERROR';

export type IDaysAction = IAction<{ month: number, days: Day[] }>;
