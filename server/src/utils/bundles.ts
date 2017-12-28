import * as path from 'path'
import * as fs from 'fs'

const bundlePath = path.join(__dirname, '../../../client/bundle.json');
const isProduction = process.env.NODE_ENV === 'production';

function readBundle(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

export function getBundle() {
    return isProduction ?
        require(bundlePath) :
        readBundle(bundlePath);
}
