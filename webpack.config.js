/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
const appPath = path.join(__dirname, 'app')

/*get all the entry files*/
var getFile = function(res, fileDir){
    fs.readdirSync(fileDir).forEach(function(filename){
        var n = path.join(fileDir, filename);
        var stats = fs.statSync(n);
        if(stats.isDirectory()){
            getFile(res, n);
        }else{
            if(/\.js$/.test(n)){
                var pa = n.split(appPath + '/')[1].split('.')[0];
                res[pa] = n;
            }
        }
    });
    return res;
}

module.exports = {
  appPath: appPath,

  devtool: 'eval',

  entry: getFile({}, appPath),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },{
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },{
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },{
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
        'common': path.join(__dirname, 'common'),
        'assets': path.join(__dirname, 'assets')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]
}