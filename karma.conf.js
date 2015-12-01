module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    // {included: false} for a pattern means that those files matching the pattern
    // will not be included in the browser using <script> tags - they will be loaded
    // manually (using Require.js).
    files: [
      'src/app/require.config.js',
      'test/require.config.js',
      'test/SpecRunner.karma.js',
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'src/**/*.html', included: false },
      { pattern: 'test/**/*.js', included: false }
    ],


    // list of files to exclude
    exclude: [

    ],

    plugins: [
        'karma-jasmine',
        'karma-requirejs',
        'karma-babel-preprocessor',
        'karma-requireglobal-preprocessor',
        'karma-chrome-launcher'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/require.config.js': ['requireglobal'],
        'src/app/{!(require.config), **/*}.js': ['babel'],
        'src/components/**/*.js': ['babel'],
        'test/app/**/*.js': ['babel'],
        'test/components/**/*.js': ['babel']
    },

    babelPreprocessor: {
        options: { modules: 'amd' }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
