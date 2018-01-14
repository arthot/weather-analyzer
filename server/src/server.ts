import 'reflect-metadata'
import * as express from 'express'
import './store/objection'
import { routes as apiRoutes } from 'src/routes'
import { routes as staticRoutes } from 'src/static'
import { config } from 'src/utils/config'
import { getLogger } from 'src/utils/log'

const mustacheExpress = require('mustache-express');
const log = getLogger(module);
const app = express();

app.use('/api', apiRoutes);
app.use(staticRoutes);

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

export const server = app.listen(config.port, () => {
    log.info(`Application is up and running on port ${config.port}`);

    if (process.send) {
        process.send('online');
    }
});
