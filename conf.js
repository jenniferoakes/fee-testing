module.exports = function karmaConfig( config ) {
  config.set({

    frameworks: ['chai', 'mocha'],
    browsers: [ 'Chrome' ],
    singleRun: true, //this is going to launch Chrome, if it was false, it would run the test inside of the browser and then leave it there
    files: [
      //the script tags that you want to put in the fake html tag
      'src/**/*.js',
      'test/specs/**/*.js'
    ]
  });
};
