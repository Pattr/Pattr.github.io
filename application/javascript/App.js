(function(){
	'use strict';

	var pattr = angular.module('pattr', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
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
