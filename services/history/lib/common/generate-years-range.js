import _ from 'lodash';

const { range } = _;

export const YEARS_DEPTH = 4;

/**
 * Generates years range to update
 *
 * @param {number} month
 */
export function getYearsRange(month) {
  const now = new Date();
  const year = now.getFullYear();

  const length = now.getMonth() >= month - 1 ? 1 : 0;

  return range(year - YEARS_DEPTH, year + length);
}
