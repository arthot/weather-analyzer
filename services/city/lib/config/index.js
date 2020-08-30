import { validate } from './validate';

const { LOGGER_LEVEL, MONGODB_URI, PORT } = process.env;

export const db = {
  uri: MONGODB_URI || 'mongodb://127.0.0.1:27017/weather',
  name: 'weather',
  options: {
    useUnifiedTopology: true,
  },
};

export const port = PORT || '8000';

export const logger = {
  level: LOGGER_LEVEL || 'debug',
};

validate({
  db,
  port,
  logger,
});
