const webpack = require('webpack');
const path = require('path');

const buildPath = path.join(__dirname, '../build');

const baseConfig = require('./base.config');

baseConfig.mode = 'production';

baseConfig.output = {
    path: buildPath,
    publicPath: '/',
    filename: '[name]-[chunkhash].js',
};

baseConfig.plugins = baseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
    }),
    new webpack.HashedModuleIdsPlugin(),
]);

module.exports = baseConfig;
