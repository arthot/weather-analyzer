import bunyan from 'bunyan';
import { logger } from './config/index.js';

export default bunyan.createLogger({ level: logger.level, name: 'weather-history-service' });
