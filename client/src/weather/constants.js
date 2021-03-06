import range from 'lodash/range'

export const MODES = {
    TEMPERATURE: 'temp',
    PRECIPITATION: 'cloud',
}

export const MONTHS_LENGTH = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

export const YEARS = range(new Date().getFullYear() - 4, new Date().getFullYear() + 1);
