(function(){

	'use strict';

	describe('Pattr Controllers Module:', function() {

		var module;
		beforeEach(function() {
			module = angular.module('pattr.controllers');
		});

		it('should be registered', function() {
			expect(module).not.toBeNull();
		});
	});
})();
