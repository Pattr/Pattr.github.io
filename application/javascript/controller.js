(function(){
	'use strict';

	angular.module('pattr.controllers', [])
		.controller('NavController', NavController)
		.controller('ComponentController', ComponentController);

		NavController.$inject = ['$scope', 'ComponentService'];
		function NavController($scope, ComponentService){
			ComponentService.getComponentsList().success(function(list){
				list = _.map(list, function(c) {
					c.id = ComponentService.generateId(c.name);
					return c;
				});
				$scope.categories = _.groupBy(list, function(c) {
					return c.category;
				});
			});
		}

		ComponentController.$inject = ['$scope', 'component'];
		function ComponentController($scope, component){
			$scope.component = component;
		}
})();
