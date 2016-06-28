var thisModule = angular.module('sample.run.init', []).run(runInit);

if (typeof module === 'object' && module.hasOwnProperty('exports')) module.exports = thisModule;


function runInit($rootScope, $state) {
  $rootScope.$state = $state;

  $rootScope.$on('$stateChangeStart', handleLoading);
  $rootScope.$on('$stateChangeError', handleLoading);
  $rootScope.$on('$stateChangeSuccess', handleLoading);

  function handleLoading(ev, stateTo, stateToParam, stateFrom, stateFromParam, error) {

    switch (ev.name) {
      case '$stateChangeStart' :

        if (stateTo.redirectTo) {
          ev.preventDefault();
          $state.go(stateTo.redirectTo, stateToParam);
        }

        break;
      case '$stateChangeSuccess' :

        break;
      case '$stateChangeError' :
        if (error.changeState) {
          $state.go(error.changeState);
        } else {
          if (!stateFrom || stateFrom.name === "") {
            $state.go('posts');
          }
        }
        break;
    }
  }
}
