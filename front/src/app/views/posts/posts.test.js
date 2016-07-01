
describe('Posts Controller ', function() {
	var PostsController;
	var scope;

	beforeEach(function () {
		module('ui.router');
	    module('sample.views.posts', function ($stateProvider) {
	      $stateProvider
	        .state(
	          'private',
	          {}
	        );
	    });

	    inject(function ($rootScope, $controller) {
	      scope = $rootScope.$new();
			PostsController = $controller('PostsController as postsVM', {
				$scope: scope
			});
	    });
  	});


	it('says Angular Worked!!! Yay!', function () {
		expect(scope.postsVM.message).toEqual('Angular Worked!!! Yay!');
	});
});
