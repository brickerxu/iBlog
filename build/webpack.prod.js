const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base.js');

const devConfig = {
    mode: 'production',
    output: {
        filename: 'js/[chunkhash].js',
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig);