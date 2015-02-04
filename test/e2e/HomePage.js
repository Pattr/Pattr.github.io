(function(){
	'use strict';

	describe('Home Page ', function() {

		beforeEach(function () {
			browser.get('/#/');
		});

		it('should display the "Pattr" h1 title', function(){
			expect(element(by.tagName('h1')).getInnerHtml()).toEqual('Pattr');
		});
	});
})();
