'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var minify      = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp.src('./src/m.scss')
    .pipe(sass())
    .pipe(minify())
    .pipe(rename('m.min.css'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./src/*.scss', ['sass']);
  gulp.watch('./src/*.js').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);