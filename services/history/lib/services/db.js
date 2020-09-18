import { weather } from '../mongo';

/** @typedef {import('./history/parse-result').DayRecord} DayRecord */

/**
 * @typedef HistoryRecord
 * @property {number} cityId
 * @property {number} year
 * @property {number} month
 * @property {Array<DayRecord>} records
 */

/**
 * Caches weather history record
 *
 * @param {HistoryRecord} record
 * @returns {Promise}
 */
export function cacheHistory({ cityId, year, month, history }) {
  return weather().updateOne(
    { cityId, year, month },
    {
      $setOnInsert: {
        cityId,
        year,
        month,
        history,
      },
      $set: { history },
    },
    { upsert: true },
  );
}

/**
 * Gets the last cached date for set cityId
 *
 * @param {number} cityId
 * @returns {Promise<HistoryRecord>}
 */
export function getLastCachedMonth(cityId) {
  return weather().find({ cityId }).sort({ year: -1, month: -1 }).limit(1).toArray();
}

/**
 * Finds weather history by cityId and month
 *
 * @param {number} cityId
 * @param {number} month
 * @returns {Promise<Array<HistoryRecord>>}
 */
export function getHistoryByCity(cityId, month) {
  return weather().find({ cityId, month }).sort({ year: 1, month: 1 }).toArray();
}
