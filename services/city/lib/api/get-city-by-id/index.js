import logger from '../../logger';
import { toHttpResult } from '../../utils/to-http-result';
import { ensureValidParams } from './ensure-valid-params';

/**
 * Get cities by id
 *
 * @param {number} lang
 * @param {number} id
 * @returns {Promise<{body: any[], status: number}>}
 */
export const getCityById = async (lang, id) => {
  logger.debug(`Reading city "${id}" [lang=${lang}]`);

  ensureValidParams({ lang, id });

  const item = {};

  return {
    status: 200,
    body: toHttpResult(item),
  };
};
