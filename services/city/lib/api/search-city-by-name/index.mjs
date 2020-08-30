import logger from '../../logger';
import { toHttpResult } from '../../utils/to-http-result';

/**
 * Search cities by name
 *
 * @param {number} lang
 * @param {number} name
 * @returns {Promise<{body: any[], status: number}>}
 */
export const searchCityByName = async (lang, name) => {
  logger.debug(`Searching city "${name}" [lang=${lang}]`);
  const items = [];

  return {
    status: 200,
    body: items.map(toHttpResult),
  };
};
