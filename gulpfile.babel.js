const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

gulp.task('html', () => {
	return gulp.src('./src/index.jade')
	.pipe(jade())
	.pipe(gulp.dest('./build/'));
});

gulp.task('css', ()=>{
	return gulp.src('./src/styles.scss')
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./build/'));
});

gulp.task('media', ()=>{
	return gulp.src(['./src/*.jpg', './src/*.pdf'])
	.pipe(gulp.dest('./build/'));
});

gulp.task('watch-changes', ['build'], browserSync.reload);

gulp.task('build', ['html', 'css', 'media']);

gulp.task('default', ['build'], () => {
	browserSync.init({
		server: {
			baseDir: "./build/"
		}
	});
	gulp.watch("./src/**", ['watch-changes'] );
});