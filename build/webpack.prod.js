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
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons' ,  // 提取出来的文件命名
                    chunks: 'initial',   // initial表示提取入口文件的公共css及js部分
                    minChunks: 2, // 表示提取公共部分最少的文件数
                    minSize: 200  // 表示提取公共部分最小的大小 
                }
            }
        }
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