import micro from 'micro';
import { middleware } from './middleware';
import { getHistoryByMonth } from './api/get-history-by-month';

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
export const getHistory = middleware(async req => {
  const { cityId, month } = req.params;
  return getHistoryByMonth(parseInt(cityId, 10), parseInt(month, 10));
});
