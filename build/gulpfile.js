var gulp = require('gulp');
gulp.task('a',function(){
  gulp.src('./*.js')
      .pipe(gulp.dest('./build'));
});
