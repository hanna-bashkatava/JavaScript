exports.config = {
    directConnect: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://yandex.by',
    takeScreenshotFromEachAllureStep:true,
    seleniumArgs: ['-Dwebdriver.edge.driver=C:/edgedriver_win64/MicrosoftWebDriver.exe'],
    multiCapabilities: [{
    'browserName': 'MicrosoftEdge',
    edgeOptions: {
      'args': ['start-maximized']
  }
  }],
  
  specs: ['sources/output_js/tests/*test.js'],
  
    onPrepare: function () {
    browser.waitForAngularEnabled(false)
    const AllureReporter = require('jasmine-allure-reporter');
    const allureReporter = new AllureReporter({
    resultsDir: 'allure-results'
    });
    jasmine.getEnv().addReporter(allureReporter);
    }
};