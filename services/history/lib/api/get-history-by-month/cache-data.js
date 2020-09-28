import { cacheHistory, getLastCachedYear } from '../../services/db.js';
import { getLastCachedDate } from '../../common/get-last-cached-date.js';
import { parse } from '../../services/history/index.js';
import { getYearsRangeToUpdate } from '../../common/get-years-range-to-update.js';
import logger from '../../logger.js';

/**
 * Caches weather history by cityId and month
 *
 * @param {number} cityId
 * @param {number} month
 * @returns {Promise}
 */
export async function cacheData(cityId, month) {
  const lastCachedRecord = await getLastCachedYear(cityId, month);
  const years = getYearsRangeToUpdate(month, getLastCachedDate(lastCachedRecord));

  await Promise.all(
    years.map(async year => {
      try {
        const record = await parse(cityId, year, month);
        await cacheHistory(record);
      } catch (err) {
        logger.error({ err, cityId, month, year }, `Error caching data: ${err.message}`);
      }
    }),
  );
}
