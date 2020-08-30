import errors from '@umnico/api-errors';
import fetch from 'node-fetch';
import { convertApiResult } from './convert-result';

const { NotFound, BadRequest, InternalServerError } = errors;

const headers = {
  'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,ru;q=0.7',
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 OPR/69.0.3686.77',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
};

const cookieStore = new Map();

/**
 * Mimic Gismeteo ajax search request
 *
 * @param {string} lang
 * @param {string} query
 */
export async function searchCity(lang, query) {
  const host = `www.gismeteo.${lang === 'ru' ? 'ru' : 'com'}`;
  const url = `https://${host}/ajax/suggest/?lang=${lang}&startsWith=${query}&sort=typ`;

  const res = await fetch(url, {
    headers: { ...headers, cookie: cookieStore.get(host) },
  });

  if (res.status === 404) throw new NotFound();
  if (res.status === 400) throw new BadRequest();

  if (res.status === 200) {
    const data = await res.json();
    cookieStore.set(host, res.headers.raw()['set-cookie']);

    return convertApiResult(data);
  }

  throw new InternalServerError();
}
