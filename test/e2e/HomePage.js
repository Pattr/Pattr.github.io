(function(){
	'use strict';

	describe('Home Page ', function() {

		beforeAll(function () {
			browser.get('/');
		});

		it('should display the "Pattr" h1 title', function(){
			expect(element(by.tagName('h1')).getInnerHtml()).toEqual('Pattr');
		});

		it('should contain the copyright paragraph', function(){
			expect(element(by.className('copyright')).isPresent()).toBeTruthy();
			expect(element(by.xpath('//a[@href="https://github.com/Pattr/Pattr.github.io/blob/master/LICENSE"]')).isPresent()).toBeTruthy();
		});

		it('should contain the About Pattr link', function(){
			var link = element(by.xpath('//a[@href="https://github.com/Pattr/Pattr.github.io/blob/master/README.md"]'));
			expect(link.isPresent()).toBeTruthy();
			expect(link.getInnerHtml()).toEqual('About Pattr');
		});

		it('should contain the Contact link', function(){
			var link = element(by.xpath('//a[@href="https://github.com/Pattr/Pattr.github.io/issues"]'));
			expect(link.isPresent()).toBeTruthy();
			expect(link.getInnerHtml()).toEqual('Contact');
		});

		it('should contain a <h1> with the classe CSS home', function(){
			expect(element(by.xpath('//h1[@class="home"]')).isPresent()).toBeTruthy();
		});

		it('should contain the Github link', function(){
			var link = element(by.xpath('//a[@href="https://github.com/Pattr/Pattr.github.io"]'));
			expect(link.isPresent()).toBeTruthy();
			expect(link.getInnerHtml()).toEqual('Fork us on Github');
		});

		it('should contain the Twitter link', function(){
			//Change with the Twitter URL
			var link = element(by.xpath('/html/body/div[1]/ul/li[2]/a'));
			expect(link.isPresent()).toBeTruthy();
			expect(link.getInnerHtml()).toEqual('Follow @pattr');
		});
	});
})();
