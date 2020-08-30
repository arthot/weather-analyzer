const micro = require('micro');
const { ApiError } = require('@umnico/api-errors');
const logger = require('./logger');

module.exports = handler => async (req, res) => {
  try {
    const { account } = req.query;

    const { status, body = null } = await handler(req, account);

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
