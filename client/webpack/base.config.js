const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const { CheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader');

const tsSourcePath = path.join(__dirname, '../src');
const imgPath = path.join(__dirname, '../src/images');
const localesPath = path.join(__dirname, '../src/locales');
const sourcePath = path.join(__dirname, '../src');
const nodeModules = path.resolve(__dirname, '../node_modules');

module.exports = {
    context: tsSourcePath,
    module: {
        rules: [
            {
                test: /\.json5?$/,
                include: localesPath,
                loader: 'json5-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                include: tsSourcePath,
                use: [{
                    loader: 'babel-loader'
                }, {
                    loader: 'awesome-typescript-loader',
                    options: {
                        useBabel: true,
                        useCache: false
                    }
                }]
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                include: imgPath,
                loader: 'file-loader',
                options: { name: 'img/[name]-[hash].[ext]' }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                include: /node_modules|fonts/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.less', '.json5', '.js', '.jsx'],
        modules: [nodeModules, path.resolve(__dirname, '../')]
    },
    plugins: [
        new AssetsWebpackPlugin({
            filename: 'bundle.json',
            update: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[chunkhash].js',
            minChunks(module) {
                const context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
            chunks: ['app']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [],
                context: sourcePath,
            },
        }),
        new CheckerPlugin(),
        new TsConfigPathsPlugin(),
        new ExtractTextPlugin('style-[name]-[chunkhash].css')
    ]
};
