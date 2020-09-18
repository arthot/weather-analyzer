import _ from 'lodash';

const { maxBy } = _;

/**
 * Gets last cached date from the last cached record
 *
 * @param {object} lastRecord
 */
export function getLastCachedDate(lastRecord) {
  if (!lastRecord || !lastRecord.records.length) return null;

  return new Date(lastRecord.year, lastRecord.month - 1, maxBy(lastRecord.records, 'day'));
}
