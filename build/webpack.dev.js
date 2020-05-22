const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const devConfig = {
    mode: 'development',
    devServer: {
        contentBase: "./dist",
        port: 8081,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.styl(us)?$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            }, {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig);