(function(){

	'use strict';

	describe('ComponentService:', function() {

		var ComponentService, httpBackend;

		beforeEach(module('pattr.services'));

		beforeEach(inject(function (_ComponentService_, $httpBackend) {
			ComponentService = _ComponentService_;
			httpBackend = $httpBackend;
		}));

		describe('getComponentsList:', function(){
			it('should return a JSON Array', function () {
				httpBackend.whenGET('/components/list.json').respond([{}]);
				ComponentService.getComponentsList().then(function(result) {
					expect(result.data).toEqual([{}]);
				});
				httpBackend.flush();
			});
		});

		describe('generateId:', function(){
			it('should replace all space with dash', function () {
				expect(ComponentService.generateId('name with space')).toEqual('name-with-space');
				expect(ComponentService.generateId('name-with-space')).toEqual('name-with-space');
			});

			it('should put into lowercase', function () {
				expect(ComponentService.generateId('NamE-wiTh-space')).toEqual('name-with-space');
			});
		});

		describe('getComponent:', function(){
			it('should return the right object', function () {
				httpBackend.whenGET('/components/list.json').respond([{name: 'component1'}, {name: 'component2'}]);
				ComponentService.getComponent('component1').then(function(result) {
					expect(result).toEqual({name: 'component1'});
				});
				httpBackend.flush();
			});
		});
	});
})();
