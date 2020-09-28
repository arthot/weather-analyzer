import logger from '../../logger';
import { toHttpResult } from '../../utils/to-http-result';
import { ensureValidParams } from './ensure-valid-params';
import { cacheSearch, searchByQuery } from '../../services/db';
import { searchCity } from '../../services/city/index';

/**
 * Search cities by name
 *
 * @param {number} lang
 * @param {number} query
 * @returns {Promise<{body: any[], status: number}>}
 */
export const searchCityByName = async (lang, query) => {
  logger.debug(`Searching city '${query}' [lang='${lang}']`);

  ensureValidParams({ lang, query });

  const cached = await searchByQuery(lang, query);
  let cities;

  if (!cached) {
    cities = await searchCity(lang, query);
    await cacheSearch(lang, query, cities);
  } else {
    cities = cached;
  }

  return {
    status: 200,
    body: cities.map(toHttpResult),
  };
};
