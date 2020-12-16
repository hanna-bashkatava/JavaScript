// An example configuration file.
exports.config = {
    directConnect: true,
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to the current working directly when
    // protractor is called.
<<<<<<< HEAD
    specs: ['sources/output_js/MyFirstTest.js'],
=======
    specs: ['MyFirstTest.js'],
>>>>>>> a626d43f924546090392db716c87ede1ad4513fd
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 100000
    }
  };