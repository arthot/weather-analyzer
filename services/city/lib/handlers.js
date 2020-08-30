import micro from 'micro';
import { middleware } from './middleware';
import { searchCityByName } from './api/search-city-by-query';
import { getCityById } from './api/get-city-by-id';

const { send } = micro;

/**
 * @param {Request} req
 * @param {Response} res
 */
export const ping = (req, res) => send(res, 200, { ping: 'pong' });

/**
 * @param {Request} req
 * @param {Response} res
 */
export const searchCity = middleware(async req => {
  const { lang } = req.params;
  const { query } = req.query;
  return searchCityByName(lang, query);
});

/**
 * @param {Request} req
 * @param {Response} res
 */
export const getCity = middleware(async req => {
  const { lang, id } = req.params;
  return getCityById(lang, parseInt(id, 10));
});
