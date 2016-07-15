/*eslint no-console:0 */
'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

var devServer = {
    contentBase: './app/',
    historyApiFallback: true,
    hot: true,
    port: 8081,
    publicPath: config.output.publicPath
};

config.entry = [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './app/app.js'
];
config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin()
);
config.module.loaders.unshift({
    test: /\.js$/,
    loaders: ['react-hot', 'babel'],
    include: config.appPath
});

console.log(config);

new WebpackDevServer(webpack(config), devServer).listen(devServer.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + devServer.port);
});
