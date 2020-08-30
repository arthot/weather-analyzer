import logger from '../../logger';
import { toHttpResult } from '../../utils/to-http-result';

/**
 * Get cities by id
 *
 * @param {number} lang
 * @param {number} id
 * @returns {Promise<{body: any[], status: number}>}
 */
export const getCityById = async (lang, id) => {
  logger.debug(`Reading city "${id}" [lang=${lang}]`);
  const item = {};

  return {
    status: 200,
    body: toHttpResult(item),
  };
};
