import { startServer } from './server.js';
import logger from './logger.js';

startServer().catch(err => logger.error(err, 'There was a problem starting the server'));
