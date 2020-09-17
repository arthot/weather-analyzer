import _ from 'lodash';

const { range } = _;

export const YEARS_DEPTH = 4;

/**
 * Generates years range to update
 *
 * @param {number} month
 */
export function getYearsRange(month) {
  const date = new Date();
  const start = date.getFullYear() - YEARS_DEPTH;
  const length = date.getMonth() >= month - 1 ? YEARS_DEPTH + 1 : YEARS_DEPTH;

  return range(start, start + length);
}
