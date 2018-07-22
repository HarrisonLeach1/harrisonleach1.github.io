
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

gulp.task('sass', function () {
  return gulp.src(SCSS_SRC)
    .pipe(sass.sync().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({suffix:'.min'}))
	.pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(SCSS_SRC, gulp.series('sass'));
});

gulp.task('default', gulp.series('sass:watch', function(done){
	done();
}));