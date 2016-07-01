'use strict';

var webpack = require('webpack');
var webpackConfig = require('./webpack/webpack.config');
webpackConfig.cache = true;
webpackConfig.module.postLoaders = [
  {
    test: /\.js$/,
    loader: 'istanbul-instrumenter',
  },
];

module.exports = function (config) {
  var preprocessorNameJS = 'src/app/index.js';
  var preprocessorHtmlViews = 'src/app/views/**/*.html';

  var preprocessors = {};
  preprocessors[preprocessorNameJS] = ['webpack'];
  preprocessors[preprocessorHtmlViews] = ['ng-html2js'];

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app/index.js',
      'src/app/**/*.test.js',
      'src/app/**/*.html'
    ],
    proxies: {
      '/img/': 'https://localhost:9876/img/',
    },
    webpack: {
      resolve: webpackConfig.resolve,
      module: webpackConfig.module
    },
    exclude: [
      '*.sass',
    ],
    webpackMiddleware: {
      noInfo: true,
    },
    preprocessors: preprocessors,
    reporters: ['spec', 'coverage', 'bamboo'],
    bambooReporter: {
      filename: 'dist/bamboo.json',
    },
    coverageReporter: {
      type: 'html',
      dir: 'reports/',
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/app/views/',
      moduleName: function (htmlPath) {
        return htmlPath;
      },
    },
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs2-launcher'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-bamboo-reporter'),
      require('karma-spec-reporter'),
      require('karma-ng-html2js-preprocessor'),
    ],
    port: 9876,
    captureTimeout: 600000,
    browserDisconnectTimeout: 10000, // default 2000
    browserDisconnectTolerance: 1, // default 0
    browserNoActivityTimeout: 600000, //default 10000
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS2'],

    //browsers: ['Chrome','PhantomJS2'],
    singleRun: false,
  });
};