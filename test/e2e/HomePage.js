(function(){
	'use strict';

	describe('Home Page ', function() {

		beforeEach(function () {
			browser.get('/#/');
		});

		it('should display the "Home Page" h2 title', function(){
			expect(element(by.tagName('h2')).getInnerHtml()).toEqual('Home Page');
		});
	});
})();
