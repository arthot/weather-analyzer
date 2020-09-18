import logger from '../../logger.js';
import { toHttpResult } from '../../utils/to-http-result.js';
import { ensureValidParams } from './ensure-valid-params.js';
import { getHistoryByCity } from '../../services/db.js';
import { cacheData } from './cache-data.js';

/**
 * Get weather history by cityId and month
 *
 * @param {number} cityId
 * @param {number} month
 * @returns {Promise<{body: any[], status: number}>}
 */
export const getHistoryByMonth = async (cityId, month) => {
  logger.debug(`Reading weather [cityId="${cityId}", month="${month}"]`);

  ensureValidParams({ cityId, month });

  await cacheData(cityId, month);

  const records = await getHistoryByCity(cityId, month);

  return {
    status: 200,
    body: records.map(toHttpResult),
  };
};
