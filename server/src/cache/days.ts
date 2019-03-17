import { range } from 'lodash'
import * as Service from 'src/store/days/service'
import { parse, getDaysInMonth } from 'date-fns'
import { transaction } from 'src/store/objection';
import { Day } from 'src/common/day';
import * as Parser from 'src/parsers/day'

export const YEARS_DEPTH = 5;

function shouldMonthDataBeUpdate(year, month, lastCachedDate, today) {
    return !lastCachedDate || lastCachedDate.getFullYear() !== year
        || (today.getMonth() + 1 != month && lastCachedDate.getDate() < getDaysInMonth(Date.UTC(year, month - 1)))
        || (today.getMonth() + 1 === month && lastCachedDate.getDate() < today.getDate() - 2);
}

export async function cache(cityId: number, month: number) {
    const date = await Service.getLastCachedDay(cityId, month);
    const lastCachedDate = date ? parse(date) : null;
    const today = new Date();
    const days: Day[] = [];

    await Promise.all(
        getYearsRange(month)
            .filter(y => !lastCachedDate || lastCachedDate.getFullYear() <= y)
            .filter(y => shouldMonthDataBeUpdate(y, month, lastCachedDate, today))
            .map(year => Parser.parse(cityId, year, month).then(ds => days.push(...ds)))
    );

    await Service.save(days.filter(d => !lastCachedDate || parse(d.date) > lastCachedDate));
}

export function getYearsRange(month: number) {
    const date = new Date();
    const start = date.getFullYear() - YEARS_DEPTH + 1;
    const length = date.getMonth() + 1 >= month ? YEARS_DEPTH : YEARS_DEPTH - 1;

    return range(start, start + length);
}
