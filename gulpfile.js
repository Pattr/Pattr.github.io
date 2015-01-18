(function () {
   'use strict';
   var gulp = require('gulp'),
		eslint = require('gulp-eslint');

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

	gulp.task('default', ['quality']);
}());
