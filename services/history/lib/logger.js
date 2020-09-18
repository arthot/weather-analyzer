import bunyan from 'bunyan';
import { logger } from './config/index.js';

import pckg from '../package.json';

const { name } = pckg;

export default bunyan.createLogger({ level: logger.level, name });
