import errors from '@umnico/api-errors';
import logger from '../../logger';
import { toHttpResult } from '../../utils/to-http-result';
import { ensureValidParams } from './ensure-valid-params';
import { getById } from '../../services/db';

const { NotFound } = errors;

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

  const item = await getById(lang, id);

  if (!item) {
    throw new NotFound();
  }

  return {
    status: 200,
    body: toHttpResult(item),
  };
};
