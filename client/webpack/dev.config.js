const webpack = require('webpack');
const path = require('path');
const server = require('./app-server');

const buildPath = path.join(__dirname, '../build');

const baseConfig = require('./base.config');

baseConfig.devtool = 'source-map';

baseConfig.entry = {
    app: [
        'webpack-dev-server/client?http://localhost:2123',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        '../src/app.tsx',
    ]
}

baseConfig.output = {
    path: buildPath,
    filename: '[name]-dev.js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:2123/assets/'
};

baseConfig.module.rules = baseConfig.module.rules.concat([
    {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
]);

baseConfig.plugins = baseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development'),
        },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    function () {
        this.plugin('done', server);
    }
]);

module.exports = baseConfig;
