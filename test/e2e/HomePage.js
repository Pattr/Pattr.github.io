(function(){
	'use strict';

	describe('Home Page ', function() {

		beforeEach(function () {
			browser.get('/');
		});

		it('should display the "Pattr" h1 title', function(){
			expect(element(by.tagName('h1')).getInnerHtml()).toEqual('Pattr');
		});

		it('should contain the copyright paragrph', function(){
			//TODO
		});

		it('should contain the About Pattr link', function(){
			//TODO
		});

		it('should contain the Contact link', function(){
			//TODO
		});

		it('should contain a <h1> with the classe CSS home', function(){
			//TODO
		});

		it('should contain the Github link', function(){
			//TODO
		});

		it('should contain the Twitter link', function(){
			//TODO
		});
	});
})();
