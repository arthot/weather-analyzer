import dateFns from 'date-fns';
import { getYearsRange } from './generate-years-range.js';

const { getDaysInMonth } = dateFns;

/**
 * Detects if month data is partially loaded
 *
 * @param {number} year
 * @param {number} month
 * @param {Date} lastCachedDate
 * @param {Date} today
 * @returns {boolean}
 */
const isPartiallyDownloadedPastMonth = (year, month, lastCachedDate, today) =>
  today.getMonth() !== month - 1 &&
  lastCachedDate.getDate() < getDaysInMonth(Date.UTC(year, month - 1));

/**
 * Detects if month data is partially loaded
 *
 * @param {number} year
 * @param {number} month
 * @param {Date} lastCachedDate
 * @param {Date} today
 * @returns {boolean}
 */
const isPartiallyDownloadedCurrentMonth = (year, month, lastCachedDate, today) =>
  today.getMonth() === month - 1 && lastCachedDate.getDate() < today.getDate() - 2;

/**
 * Detects if month cache should be invalidated
 *
 * @param {number} year
 * @param {number} month
 * @param {Date} lastCachedDate
 * @param {Date} today
 * @returns {boolean}
 */
const shouldMonthDataBeUpdate = (year, month, lastCachedDate, today) => {
  if (isPartiallyDownloadedPastMonth(year, month, lastCachedDate, today)) return true;
  if (isPartiallyDownloadedCurrentMonth(year, month, lastCachedDate, today)) return true;
  return false;
};

/**
 * Gets years to load history data
 *
 * @param {number} month
 * @param {Date} lastCachedDate
 * @returns {Array<number>}
 */
export function getYearsRangeToUpdate(month, lastCachedDate) {
  return getYearsRange(month).filter(y => {
    if (!lastCachedDate || lastCachedDate.getMonth() !== month - 1) return true;

    return (
      lastCachedDate.getFullYear() <= y &&
      shouldMonthDataBeUpdate(y, month, lastCachedDate, new Date())
    );
  });
}
