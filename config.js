
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
  },
  
  specs: ['sources/output_js/tests/login.js'],
  
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000
  }

   
};

// afterAll(function() {
//   browser.close;
// }, 1000)