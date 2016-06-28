require('./posts.scss');

var thisModule = angular.module('sample.views.posts', [])
  .config(postsConfig);

if (typeof module === 'object' && module.hasOwnProperty('exports')) module.exports = thisModule;

function appConfig($stateProvider) {
  $stateProvider
    .state('posts', {
      url: "",
      views: {
        "layout@": {
          template: require('./posts.html'),
          controllerAs: 'postsVM',
          controller: postsController
        }
      }
    })
  ;
}

// Posts controller
function postsController() {
  var appVM = this;
  appVM.message = 'Angular Worked!!!'
}
