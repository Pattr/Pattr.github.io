(function(){
	'use strict';

	angular.module('pattr.controllers', [])
		.controller('HomeController', ['$scope', 'ComponentService', function($scope, ComponentService){
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
		.controller('ComponentController', ['$scope', 'ComponentService', '$stateParams', '$log', function($scope, ComponentService, $stateParams, $log){
			ComponentService.getComponent($stateParams.id).then(function(component){
				if(angular.isArray(component)){
					$log.warn('The result of the ComponentService.getComponent method should not return an Array');
					component = component[0];
				}
				$scope.component = component;
			});
		}]);
})();
