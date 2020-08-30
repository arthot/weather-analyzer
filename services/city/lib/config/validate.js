import Ajv from 'ajv';
import configSchema from './schema.json';

const ajv = new Ajv();
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
