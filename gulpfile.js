"use strict";

var gulp = require("gulp");
var pump = require("pump");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var minify = require("gulp-clean-css");
var browserSync = require("browser-sync").create();

gulp.task("sass", () => {
  return gulp
    .src("./src/m.scss")
    .pipe(sass())
    .pipe(minify())
    .pipe(rename("m.min.css"))
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task("minify", function(cb) {
  pump([
    gulp.src("./src/*.js"), 
    uglify({
      compress: true,
      mangle: {
        keep_fnames: false,
        toplevel: true
      },
    }), 
    rename('m.min.js'),
    gulp.dest("dist"),
    browserSync.stream()
  ], cb);
});

gulp.task("serve", ["sass"], () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/*.scss", ["sass"]);
  gulp.watch("./src/*.js", ["minify"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
