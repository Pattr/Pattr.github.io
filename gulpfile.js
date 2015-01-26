(function () {
   'use strict';
   var gulp = require('gulp'),
		eslint = require('gulp-eslint'),
		protractor = require('gulp-protractor').protractor;

	gulp.task('quality', function() {

		gulp.src(['application/**/*.js'])
			.pipe(eslint({
				rules: {
					'quotes': [2, 'single']
				},
				globals: {
					'angular': true
				}
			}))
			.pipe(eslint.failOnError());
	});

	// Start a standalone server
	var webdriver_standalone = require('gulp-protractor').webdriver_standalone;

	// Download and update the selenium driver
	var webdriver_update = require('gulp-protractor').webdriver_update;

	gulp.task('webdriver_update', webdriver_update);
	gulp.task('webdriver_standalone', webdriver_standalone);

	gulp.task('test:e2e',  [], function() {

		gulp.src(['./test/e2e/*.js'])
			.pipe(protractor({
				configFile: 'test/protractor.conf.js'
			})).on('error', function(e) {
				throw e;
			});
	});

	gulp.task('default', ['quality']);
	gulp.task('test', ['test:e2e']);
}());
