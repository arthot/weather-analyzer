import i18n from 'es2015-i18n-tag'
import range from 'lodash/range'

export class Month {
    constructor(public value: number) { }
    get title() {
        return i18n([`month_${this.value}`] as any);
    }
}

export const Months = [...Array(12).keys()].map(v => new Month(v + 1));

export const Years = range(new Date().getFullYear() - 4, new Date().getFullYear() + 2);
