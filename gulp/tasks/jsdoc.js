/**
 * Created by huangxinghui on 2016/2/25.
 */

var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');

gulp.task('jsdoc', function() {
  gulp.src(['README.md', './src/**/*.js'])
    .pipe(jsdoc());
});
