(function(){

	'use strict';

	describe('ComponentController:', function() {

		var ComponentService, httpBackend;
		var scope, $location, createController;

		beforeEach(module('pattr.services'));
		beforeEach(module('pattr.controllers'));

		beforeEach(inject(function ($rootScope, $controller, _ComponentService_, $httpBackend) {
			ComponentService = _ComponentService_;
			httpBackend = $httpBackend;
			httpBackend.whenGET('/components/list.json')
				.respond([
					{name: 'comp1', category: 'cat1'},
					{name: 'comp2', category: 'cat2'},
					{name: 'comp3', category: 'cat3'},
					{name: 'comp3', category: 'cat1'},
					{name: 'comp5', category: 'cat2'}
				]);
			scope = $rootScope.$new();

	        createController = function() {
	            return $controller('ComponentController', {
	                '$scope': scope, 
	                '$stateParams': {
	                	'id': 'comp1'
	                }
	            });
	        };
		}));

		it('should return the component according to the stateParams.id property', function () {
			
			var controller = createController();	
			httpBackend.flush();
			expect(scope.component).toBeDefined();
			expect(scope.component).toEqual({id: 'comp1', name: 'comp1', category: 'cat1'});
		})

		it('should return only one component if getComponent return an Array', function () {
			var controller = createController();	
			httpBackend.flush();
			expect(scope.component).toBeDefined();
			expect(scope.component.id).toBeDefined();
		})
	});
})();
