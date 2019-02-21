import * as express from 'express'
import './store/objection'
import { routes as apiRoutes } from 'src/routes'
import { config } from 'src/utils/config'
import { getLogger } from 'src/utils/log'

const log = getLogger(module);
const app = express();

app.use('/api', apiRoutes);

export const server = app.listen(config.port, config.host, () => {
    log.info(`Application is up and running on port ${config.port}`);
});
