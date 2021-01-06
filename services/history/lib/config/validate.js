import _Ajv from 'ajv';
import keywords from 'ajv-keywords';
import configSchema from './schema.js';

const Ajv = _Ajv.default;

const ajv = new Ajv();
keywords(ajv);
const validateAjv = ajv.compile(configSchema);

/**
 * Check the config based on schema
 *
 * @param {object} config - Config object.
 * @returns {undefined}
 */
export function validate(config) {
  if (!validateAjv(config)) {
    const [{ dataPath, message }] = validateAjv.errors;
    const error = `configuration${dataPath} ${message}`;
    throw new Error(error);
  }
}
