const path = require('path');

const AssetsWebpackPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsPath = path.join(__dirname, '../src');
const iconsPath = path.join(__dirname, '../src/icons');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        index: './index.js',
    },
    context: jsPath,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|gif|jpg|svg|ico)$/,
                use: [{ loader: 'file-loader', options: { name: 'images/[name]-[hash].[ext]' } }],
            },
            {
                test: /\.scss$/,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                },
            }
        },
        runtimeChunk: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        }
    },
    plugins: [
        new AssetsWebpackPlugin({
            filename: 'bundle.json',
            update: true
        }),
        new CopyWebpackPlugin([
            { from: iconsPath, to: 'icons' }
        ]),
        new MiniCssExtractPlugin({
            filename: 'style-[name]-[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            template: '../src/index.html'
        }),
    ]
};
