import _Ajv from 'ajv';
import errors from '@umnico/api-errors';
import schema from './request-params-schema.json';

const { BadRequest } = errors;

const Ajv = _Ajv.default;
const ajv = new Ajv();
const areValidParams = ajv.compile(schema);

/**
 * Ensures query parameter has required format.
 *
 * @param {{lang: string, query: string}} params
 * @throws {ApiError}
 */
export const ensureValidParams = params => {
  if (!areValidParams(params)) {
    const [{ dataPath, message }] = areValidParams.errors;
    throw new BadRequest(`Invalid parameters${dataPath}: ${message}`);
  }
};
