'use strict';
module.exports = function (config) {
    config.set({

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'mocha',
            'should'
        ],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/webcomponentsjs/webcomponents.min.js',
            'bower_components/polymer/polymer.js',
            'test/karma-loader.js',

            'test/test-component.html',

            'filters/**/*.js',

            'filters/**/*.spec.html',

            'filters/**/*.test.js',

            {
                pattern: 'bower_components/**/*',
                included: false
            },
            {
                pattern: 'filters/**/*',
                included: false
            },
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
        //                  config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false

    });
};