const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base.js');

const devConfig = {
    mode: 'production',
    output: {
        filename: 'js/[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.styl(us)?$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true
                        }
                    }, 'css-loader', 'stylus-loader'
                ]
            }, {
                test: /\.css?$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true
                        }
                    }, 'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // 这里的配置和webpackOptions.output中的配置相似
            // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
            filename: 'css/[chunkhash].css',
            chunkFilename: 'css/[chunkhash].css',
        })
    ]
}

module.exports = merge(baseConfig, devConfig);