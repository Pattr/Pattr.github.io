(function () {
   'use strict';
   var gulp = require('gulp'),
		eslint = require('gulp-eslint'),
		protractor = require('gulp-protractor').protractor,
		karma = require('karma').server;

	gulp.task('quality', function() {

		gulp.src(['application/javascript/**/*.js'])
			.pipe(eslint({
				rules: {
					'quotes': [2, 'single']
				},
				globals: {
					'angular': true,
					'_': true
				}
			}))
			.pipe(eslint.format());

		gulp.src(['test/**/*.js'])
			.pipe(eslint({
				rules: {
					'quotes': [2, 'single']
				},
				globals: {
					'angular': true,
					'describe': true,
					'it': true,
					'beforeEach': true,
					'browser': true,
					'expect': true,
					'element': true,
					'by': true,
					'exports': true,
					'inject': true,
					'module': true
				}
			}))
			.pipe(eslint.format());
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

	gulp.task('test:unit', function() {
		karma.start({
			configFile: __dirname + '/test/karma.conf.js',
			singleRun: true
		});
	});

	gulp.task('default', ['quality', 'test:unit']);
}());
