exports.config = {
    
    seleniumArgs: [],

    sauceUser: null,
    sauceKey: null,    // ----- What tests to run -----
    
    specs: [
        '../test/e2e/**/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8080',

    rootElement: 'body',

    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 20000
    }
};
