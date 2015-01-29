(function(){

	'use strict';

	describe('Pattr Services Module:', function() {

		var module;
		beforeEach(function() {
			module = angular.module('pattr.services');
		});

		it('should be registered', function() {
			expect(module).not.toBeNull();
		});
	});
})();
