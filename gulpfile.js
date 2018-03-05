var gulp = require('gulp');
var ejs = require('gulp-ejs');

var data = require('./data.json');

gulp.task('compile', function() {
  gulp
    .src('./src/pages/**/*.ejs')
    .pipe(ejs(data, {}, { ext: '.html' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
  gulp.src(['./src/css/**/*']).pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['compile', 'copy']);
