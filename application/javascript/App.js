(function(){
	'use strict';
	/**
	* Initialization of the global AngularJS module
	*/
	var pattr = angular.module('pattr', [
		'ui.router',
		'pattr.controllers',
		'pattr.services'
	]);

	/**
	* Configuration of the AngularJS application
	* Definition of every routes
	*/
	pattr.config(function($stateProvider, $urlRouterProvider) {
			//$compileProvider.debugInfoEnabled(false);
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'application/views/home.html'
			})
			.state('component', {
				url: '/component/:id',
				templateUrl: 'application/views/component.html',
				controller: 'ComponentController',
				resolve: {
					component: ['ComponentService', '$stateParams', function(ComponentService, $stateParams){
						return ComponentService.getComponent($stateParams.id).then(function(component){
							return angular.extend({id: $stateParams.id}, component);
						});
					}]
				}
			});
		});
})();
