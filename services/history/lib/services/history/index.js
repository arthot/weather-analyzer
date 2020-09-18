import errors from '@umnico/api-errors';
import fetch from 'node-fetch';
import logger from '../../logger';

import { parseResult } from './parse-result';

const { NotFound, BadRequest, InternalServerError } = errors;

const headers = {
  'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,ru;q=0.7',
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 OPR/69.0.3686.77',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'content-type': 'application/json',
};

const cookieStore = new Map();

/**
 * Parses Gismeteo archive page
 *
 * @param {number} cityId
 * @param {number} year
 * @param {number} month
 */
export async function parse(cityId, year, month) {
  const host = 'www.gismeteo.ru';
  const url = `https://${host}/diary/${cityId}/${year}/${month}/`;

  logger.debug(`Fetching weather history from ${url}`);

  const res = await fetch(url, {
    headers: { ...headers, cookie: cookieStore.get(host) },
  });

  if (res.status === 404) throw new NotFound();
  if (res.status === 400) throw new BadRequest();

  if (res.status === 200) {
    const page = await res.text();
    cookieStore.set(host, res.headers.raw()['set-cookie']);

    const history = await parseResult(page);

    return {
      cityId,
      year,
      month,
      history,
    };
  }

  throw new InternalServerError();
}
