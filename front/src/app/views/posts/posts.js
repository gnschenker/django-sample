require('./posts.scss');

var thisModule = angular.module('sample.views.posts', [])
  .config(postsConfig)
  .controller('PostsController', PostsController);

if (typeof module === 'object' && module.hasOwnProperty('exports')) module.exports = thisModule;

function postsConfig($stateProvider) {
  $stateProvider
    .state('posts', {
      url: "",
      views: {
        "layout@": {
          template: require('./posts.html'),
          controllerAs: 'postsVM',
          controller: 'PostsController'
        }
      }
    })
  ;
}

// Posts controller
function PostsController() {
  var postsVM = this;
  postsVM.message = 'Angular Worked!!! Yay!';
}
