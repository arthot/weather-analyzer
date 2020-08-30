const { json } = require('micro');
const { ApiError, BadRequest } = require('@umnico/api-errors');
const {
  node: { jsonLimit },
} = require('../config');

/**
 * Parses incoming request body as json
 *
 * @param {http.IncomingMessage} req
 * @returns {Promise<object>}
 * @throws {ApiError}
 */
exports.parseJsonBody = async req => {
  try {
    return await json(req, { limit: jsonLimit });
  } catch (error) {
    if (error.statusCode === 413) {
      throw new ApiError('Request size payload exceeds limit', 413);
    }
    throw new BadRequest();
  }
};
