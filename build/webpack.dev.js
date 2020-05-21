const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const devConfig = {
    mode: 'development',
    devServer: {
        contentBase: "./dist",
        port: 8081,
        open: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig);