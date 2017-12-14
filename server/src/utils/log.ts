import * as log from 'loglevel'
import * as prefixer from 'loglevel-plugin-prefix'
import { config } from 'src/utils/config'

prefixer.apply(log, { template: '[%t] %l (%n):' });

log.setDefaultLevel(<any>config.logLevel);

export function getLogger(module) {
    let path = module.filename.split(/[/\\]/).slice(-2).join('/').replace('.ts', '');
    return log.getLogger(path);
}
