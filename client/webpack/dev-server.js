'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./dev.config');

const compiler = webpack(config);

const server = {
    port: 2123,
    host: '0.0.0.0',
    options: {
        publicPath: 'http://localhost:2123/assets/',
        compress: false,
        hot: true,
        watchOptions: {
            ignored: /node_modules/,
        },
        headers: { "Access-Control-Allow-Origin": "*" },
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        }
    }
};

const devServer = new WebpackDevServer(compiler, server.options);

devServer.listen(server.port, server.host, function () {
    console.log('\nlisten webpack dev server', server.port, '\n');
});
