(function(){

	'use strict';

	describe('Pattr Module:', function() {

		var module;
		beforeEach(function() {
			module = angular.module('pattr');
		});

		it('should be registered', function() {
			expect(module).not.toBeNull();
		});

		describe('Dependencies:', function() {

			var deps;
			var hasModule = function(m) {
				return deps.indexOf(m) >= 0;
			};

			beforeEach(function() {
				deps = module.value('appName').requires;
			});

			it('should have ui.router as a dependency', function() {
				expect(hasModule('ui.router')).toBeTruthy();
			});

			it('should have pattr.controllers as a dependency', function() {
				expect(hasModule('pattr.controllers')).toBeTruthy();
			});

			it('should have pattr.services as a dependency', function() {
				expect(hasModule('pattr.services')).toBeTruthy();
			});
		});
	});
})();
