describe('angularjs homepage', function () {
    it('should greet the named user',async function () {
        await browser.waitForAngularEnabled(false);
        browser.get('http://www.yandex.com');
    });
});
