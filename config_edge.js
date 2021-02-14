exports.config = {
    directConnect: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://yandex.by',
    takeScreenshotFromEachAllureStep:true,
    multiCapabilities: [{
    'browserName': 'MicrosoftEdge',
    edgeOptions: {
      'args': ['start-maximized']
  }
  }],
  
  specs: ['sources/output_js/tests/login.js'],
  
    onPrepare: function () {
    browser.waitForAngularEnabled(false)
    const AllureReporter = require('jasmine-allure-reporter');
    const allureReporter = new AllureReporter({
    resultsDir: 'allure-results'
    });
    jasmine.getEnv().addReporter(allureReporter);
    }
};