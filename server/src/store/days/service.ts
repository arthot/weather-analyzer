import { Day } from 'src/common/day'
import { DayModel } from './days'

export function get(cityId: number, month: number, minYear: number) {
    return DayModel.query()
        .where({ cityId })
        .andWhere(DayModel.raw('cast(substr("date", 6, 2) as INTEGER) = ?', month))
        .andWhere(DayModel.raw('cast(substr("date", 1, 4) as INTEGER) >= ?', minYear))
        .orderBy('date')
}

export function getLastCachedDay(cityId: number, month: number) {
    return DayModel.query()
        .where({ cityId })
        .andWhere(DayModel.raw('cast(substr("date", 6, 2) as INTEGER) = ?', month))
        .orderBy('date', 'desc')
        .first()
        .then(r => r ? r.date : null);
}

export function save(days: Day[]) {
    return DayModel.query().insertGraph(days);
}