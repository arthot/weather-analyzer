import 'reflect-metadata'
import * as express from 'express'
import './store/objection'
import { routes } from 'src/routes'
import nocache = require('nocache')

const app = express();

app.use('/api', nocache(), routes);

export const server = app.listen(3003);

console.log('Application is up and running on port 3003');
