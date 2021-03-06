export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Weather history service config',
  description: 'A history service config object',
  required: ['db', 'logger', 'port'],
  type: 'object',
  properties: {
    db: { $ref: '#/definitions/MongoDB' },
    logger: { $ref: '#/definitions/Logger' },
    port: { type: 'string', pattern: '^[0-9]{2,5}$' },
  },
  definitions: {
    MongoDB: {
      type: 'object',
      required: ['uri'],
      properties: { uri: { type: 'string', minLength: 5 } },
    },
    Logger: {
      type: 'object',
      required: ['level'],
      properties: {
        level: { type: 'string', enum: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'] },
      },
    },
  },
};
