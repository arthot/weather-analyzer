import logger from '../../logger';
import { toHttpResult } from '../../utils/to-http-result';
import { ensureValidParams } from './ensure-valid-params';

/**
 * Search cities by name
 *
 * @param {number} lang
 * @param {number} query
 * @returns {Promise<{body: any[], status: number}>}
 */
export const searchCityByName = async (lang, query) => {
  logger.debug(`Searching city "${query}" [lang=${lang}]`);

  ensureValidParams({ lang, query });
  const items = [];

  return {
    status: 200,
    body: items.map(toHttpResult),
  };
};
