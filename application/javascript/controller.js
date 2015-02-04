(function(){
	'use strict';

	angular.module('pattr.controllers', [])
		.controller('NavController', ['$scope', 'ComponentService', function($scope, ComponentService){
			ComponentService.getComponentsList().success(function(list){
				list = _.map(list, function(c) {
					c.id = ComponentService.generateId(c.name);
					return c;
				});
				$scope.categories = _.groupBy(list, function(c) {
					return c.category;
				});
			});
		}])
		.controller('ComponentController', ['$scope', 'component', function($scope, component){
			$scope.component = component;
		}]);
})();
