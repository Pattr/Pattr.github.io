(function(){
	'use strict';

	angular.module('pattr.services', [])
		.factory('ComponentService', ['$http', function($http){
			return {
				getComponentsList: function(){
					return $http.get('/components/list.json', {cache: true});
				},

				getComponent: function(id){
					var $this = this;
					return $this.getComponentsList().then(function(result){
						return _.find(result.data, function(c) { 
							return $this.generateId(c.name) === id; 
						});
					});
				},

				generateId: function(name){
					return angular.lowercase(name.replace(/\s+/g, '-'));
				}
			}
		}]);
})();
