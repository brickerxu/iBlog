const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const routes = require('../src/routes.json');

let entry = {}

routes.map(route => {
    entry[route.name] = path.resolve(__dirname, `../src/entry/${route.view}.js`)
});

module.exports = {
    entry: entry,
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.(woff|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static', to: 'static' }
              ]
        })
    ].concat(
        routes.map(route => {
            return new HtmlWebpackPlugin({
                template: './src/template.ejs',
                inject: false,
                title: route.title,
                filename: route.name + '.html',
                route: route,
                chunks: [route.name],
                minify: false
            });
        })
    ),
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}