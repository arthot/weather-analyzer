import errors from '@umnico/api-errors';
import routes from './routes';

const { ApiError, NotFound } = errors;

/**
 * This is the root handler for the requests and responses that aggregates all the routes.
 *
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @returns {Promise<void>}
 */
export const handler = async (req, res) => {
  await routes(req, res);
  if (!res.headersSent) {
    ApiError.replyError(res, new NotFound());
  }
};
