import { weather } from '../mongo';

/**
 * Caches weather history records
 *
 * @param {number} cityId
 * @param {number} month
 * @param {Array} records
 */
export function cacheHistory(cityId, month, records) {
  return weather().updateOne(
    { cityId, month },
    {
      $setOnInsert: {
        cityId,
        month,
      },
      $addToSet: { history: { $each: records } },
    },
    { upsert: true },
  );
}

/**
 * Finds weather history by cityId and month
 *
 * @param {number} cityId
 * @param {number} month
 */
export function getHistoryByCity(cityId, month) {
  return weather().find({ cityId, month }).toArray();
}
