import { weather } from '../mongo.js';

/** @typedef {import('./history/parse-result').DayRecord} DayRecord */

/**
 * @typedef HistoryRecord
 * @property {number} cityId
 * @property {number} year
 * @property {number} month
 * @property {Array<DayRecord>} history
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
      $set: { history },
      $setOnInsert: {
        cityId,
        year,
        month,
      },
    },
    { upsert: true },
  );
}

/**
 * Gets the last cached year for set cityId
 *
 * @param {number} cityId
 * @param {number} month
 * @returns {Promise<HistoryRecord | undefined>}
 */
export async function getLastCachedYear(cityId, month) {
  const [record] = await weather().find({ cityId, month }).sort({ year: -1 }).limit(1).toArray();

  return record;
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
