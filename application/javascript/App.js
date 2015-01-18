(function(){
	'use strict';

	var pattr = angular.module('pattr', ['ui.router']);

	pattr.config(function($stateProvider, $urlRouterProvider, $compileProvider) {
			$compileProvider.debugInfoEnabled(false);
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'application/views/home.html'
			})
			.state('documentation', {
				url: '/documentation',
				templateUrl: 'application/views/documentation.html'
			});

		});
})();
