import { startServer } from './server';
import logger from './logger';

startServer().catch(err => logger.error(err, 'There was a problem starting the server'));
