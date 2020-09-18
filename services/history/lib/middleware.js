import errors from '@umnico/api-errors';
import micro from 'micro';
import logger from './logger.js';

const { ApiError } = errors;

/**
 * @callback requestCallback
 * @param  {Request} req
 * @param  {Response} res
 */

/**
 * Handles all the work with http protocol
 *
 * @param {function(Request,Response)} handler
 */
export const middleware = handler => async (req, res) => {
  try {
    const { status, body = null } = await handler(req);

    return micro.send(res, status, body);
  } catch (err) {
    if (err instanceof ApiError) {
      return ApiError.replyError(res, err);
    }

    req.header = h => req.headers[h];
    logger.error(err, `Error calling: ${req.url}`);

    return ApiError.replyError(res);
  }
};
