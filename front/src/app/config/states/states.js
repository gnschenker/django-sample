var thisModule = angular.module('sample.config.states', []).config(StatesConfig);

if(typeof module === 'object' && module.hasOwnProperty('exports')) module.exports = thisModule;


function StatesConfig($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}
