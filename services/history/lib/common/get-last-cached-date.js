import _ from 'lodash';

const { maxBy } = _;

/** @typedef {import('../services/db').HistoryRecord} HistoryRecord */

/**
 * Gets last cached date from the last cached record
 *
 * @param {HistoryRecord} lastRecord
 */
export function getLastCachedDate(lastRecord) {
  if (!lastRecord || !lastRecord.history.length) return null;

  return new Date(lastRecord.year, lastRecord.month - 1, maxBy(lastRecord.history, 'day').day);
}
