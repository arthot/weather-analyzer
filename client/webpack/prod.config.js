const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildPath = path.join(__dirname, '../build');

const baseConfig = require('./base.config');

baseConfig.entry = {
    app: '../src/app.tsx',
};

baseConfig.output = {
    path: buildPath,
    publicPath: '/assets/',
    filename: '[name]-[chunkhash].js',
};

baseConfig.module.rules = baseConfig.module.rules.concat([
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader', 'less-loader'],
        })
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
        })
    },
]);

baseConfig.plugins = baseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
        },
        output: {
            comments: false,
        },
    }),
]);

module.exports = baseConfig;
