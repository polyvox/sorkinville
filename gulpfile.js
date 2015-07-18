var prefix = require('gulp-autoprefixer');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  return gulp.src('./src/styles/*')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch', function () {
  gulp.watch('./src/styles/*.scss', [ 'default' ]);
});
