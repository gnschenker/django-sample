'use strict';
var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OTXAssetWebpackPlugin = require('./OTXAssetWebpackPlugin/index.js');
var environment = configureEnv();

module.exports = {
  context: __dirname + '/../src',
  entry: {
    app: environment.appEntry
  },
  output: {
    path: environment.staticDir + '/front/',
    filename: '[name].js',
    publicPath: '/static/front/'
  },
  module: {
    loaders: [
      {
        test: /\.(scss)$/,
        loader: 'style!css!postcss-loader?safe=true&browsers=last 3 version!sass',
        include: [path.resolve(__dirname, '../src/app'), path.resolve(__dirname, '../src/embed')]
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: [/node_modules/]
      },
      {
        test: /\.less$/,
        loader: "style!css!less?strictMath&noIeCompat",
        include: [path.resolve(__dirname, '../src/embed')]
      },
      // templates to string
      {
        test: /\.html$/, loader: 'html',
        include: [path.resolve(__dirname, '../src/app')]
      },
      // images
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'file-loader?name=img/[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'static/images', to: 'images'}
    ]),
    new OTXAssetWebpackPlugin({
      template: 'templates/_base.html',
      path: environment.templatesDir + '/',
      filename: '/_base.html',
      replace: { appjs: 'app.js?v=[hash]' }
    })
  ]
}

//Configure environment
function configureEnv() {
  var staticDir = process.env.npm_package_config_staticDir || '../static';
  var templatesDir = process.env.npm_package_config_templatesDir || '../../templates';
  var appEntry = './index.js';

  var environment = {
    "appEntry": appEntry,
    "staticDir": staticDir,
    "templatesDir": templatesDir
  };

  return environment;
}
