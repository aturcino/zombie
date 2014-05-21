var Browser = require('../libs/zombie');
var assert = require('../libs/assert');
var browser = new Browser({debug:true, runScripts: false})

describe('Social icons', function() {
  it('should share test page without error via social media', function(){
    browser.visit("http://test.pg/about", function(){
        browser.wait(3000, function(){
            browser.assert.text("title", "Test page - About");
            browser.assert.element("#id1");
            browser.assert.element("#id2");
            console.log("Content:", browser.html());
	      browser.tabs.current = 1;
                browser.clickLink('a.btn.social-linkedin', function(){
                    browser.
                        fill("testuser", user).
                        fill("testpass", pass).
                        pressButton('btn.login', function(){
                            browser.pressButton('input.ok', function(){
				// handle cases for FB, Twitter... 
                            });
                        });
                });
            });
        });
    });
});
