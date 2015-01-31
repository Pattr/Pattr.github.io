(function(){

	'use strict';

	describe('HomeController:', function() {

		var httpBackend, scope, createController;

		beforeEach(module('pattr.services'));
		beforeEach(module('pattr.controllers'));
		beforeEach(function(){
			inject(function ($rootScope, $controller, $httpBackend) {
				httpBackend = $httpBackend;
				httpBackend.whenGET('/components/list.json')
					.respond([
						{name: 'comp1', category: 'cat1'},
						{name: 'comp2', category: 'cat2'},
						{name: 'comp3', category: 'cat3'},
						{name: 'comp4', category: 'cat1'},
						{name: 'comp5', category: 'cat2'}
					]);
				scope = $rootScope.$new();

				createController = function() {
					return $controller('HomeController', {
						'$scope': scope
					});
				};
			});

		});

		it('should return the list of components grouped by category', function () {

			createController();
			httpBackend.flush();
			expect(scope.categories.cat1).toBeDefined();
			expect(scope.categories.cat2).toBeDefined();
			expect(scope.categories.cat3).toBeDefined();

			expect(scope.categories.cat1.length).toEqual(2);
			expect(scope.categories.cat2.length).toEqual(2);
			expect(scope.categories.cat3.length).toEqual(1);
		});
	});
})();
