import 'reflect-metadata'
import * as express from 'express'
import './store/objection'
import { routes } from 'src/routes'
import nocache = require('nocache')
import { config } from 'src/utils/config'
import { getLogger } from 'src/utils/log';

const log = getLogger(module);
const app = express();

app.use('/api', nocache(), routes);

export const server = app.listen(config.port);

log.info(`Application is up and running on port ${config.port}`);
