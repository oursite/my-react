/*eslint no-console:0 */
'use strict';
const webpack = require('webpack');
var express = require('express')
var rewrite = require('express-urlrewrite')
const webpackDevMiddleware = require('webpack-dev-middleware');
  const  webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

var app = express()
var devServer = {
    contentBase: './app/',
    historyApiFallback: true,
    hot: true,
    port: 8081,
    publicPath: config.output.publicPath
};

config.entry = [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack-hot-middleware/client?reload=true',
    './app/app.js'
];
config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin()
);
config.module.loaders.push({
    test: /\.js$/,
    loaders: ['react-hot/webpack','babel-loader'],
    include: config.appPath
});

var compiler = webpack(config);

// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {

    // public path should be the same with webpack config
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));