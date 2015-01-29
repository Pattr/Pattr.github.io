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
	pattr.config(function($stateProvider, $urlRouterProvider, $compileProvider) {
			//$compileProvider.debugInfoEnabled(false);
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'application/views/home.html', 
				controller: 'HomeController'
			})
			.state('component', {
				url: '/component/:id',
				templateUrl: 'application/views/component.html', 
				controller: 'ComponentController'
			});

		});
})();
