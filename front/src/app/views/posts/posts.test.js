
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

	it('has title "A test..."', function () {
		expect(scope.postsVM.title).toEqual('A test for Posts');
	});


	it('defines author', function () {
		expect(scope.postsVM.author).toEqual('Nathan');
	});

});
