var modules = [
  'ui.router',
  require('./config').name,
  require('./views').name,
  require('./run').name
];

module.exports = angular.module('sample', modules);