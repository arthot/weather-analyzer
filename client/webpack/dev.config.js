const webpack = require('webpack');
const path = require('path');

const buildPath = path.join(__dirname, '../build');

const baseConfig = require('./base.config');

baseConfig.mode = 'development';

baseConfig.devtool = 'source-map';

baseConfig.output = {
    path: buildPath,
    filename: '[name]-dev.js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:3003/'
};

baseConfig.devServer = {
    port: 3003,
    host: '0.0.0.0',
    publicPath: 'http://localhost:3003/',
    disableHostCheck: true,
    compress: false,
    hot: true,
    stats: 'minimal',
    clientLogLevel: 'warning',
    historyApiFallback: {
        historyApiFallback: true
    }
}

baseConfig.plugins = baseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development'),
        },
    }),
    new webpack.HotModuleReplacementPlugin(),
]);

module.exports = baseConfig;
