'use strict';

const cp = require('child_process');
const path = require('path');
const watch = require('node-watch');
const opener = require('opener');

const SERVER_PATH = path.join(__dirname, '../../server');
const WATCH_PATH = path.join(__dirname, '../../server/src');
const APP_PATH = path.join(__dirname, '../../server/src/server.ts');

let app;
let isStarted;

const startApp = function () {
    const env = Object.assign({
        NODE_ENV: 'development',
        WEBPACK_SERVE: true,
        TS_NODE_PROJECT: SERVER_PATH
    },
        process.env);
    app = cp.fork(APP_PATH, [], {
        env: process.env,
        execArgv: ['-r', 'ts-node/register', '-r', 'tsconfig-paths/register'],
        cwd: SERVER_PATH
    });
    app.once('message', function (message) {
        if (message.match(/^online$/)) {
            if (!isStarted) {
                isStarted = true;

                opener('http://localhost:3003');

                watch(WATCH_PATH, { recursive: true }, (evt, filename) => {
                    console.log(`File "${filename}" has been ${evt}.`)
                    app.kill('SIGTERM');
                    return startApp();
                });
            }
        }
    });
};

process.on('exit', function () {
    if (app) {
        app.kill('SIGTERM');
    }
});

module.exports = function () {
    if (!app) {
        return startApp();
    }
};
