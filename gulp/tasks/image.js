/**
 * Created by huangxinghui on 2015/10/26.
 */

var gulp = require('gulp');

gulp.task('image', function() {
  return gulp.src('./images/*')
      .pipe(gulp.dest('./build/images/'));
});