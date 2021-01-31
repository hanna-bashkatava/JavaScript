
  exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://yandex.by',
  multiCapabilities: [{
  'browserName': 'chrome',
  chromeOptions: {
    'args': ['start-maximized']
}
}],

onPrepare: () => {
  browser.waitForAngularEnabled(false)
  var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
},
  
  specs: ['sources/output_js/tests/login.js'],
  
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000
  }

   
};

