
const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

var files = {
	scssSource: './assets/scss/**/*.scss',
	jsSource: './assets/js/**/*.js'
}

function sassTask() {
	return src(files.scssSource)
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write('.'))
	.pipe(dest('./assets/')
	);
}

function jsTask() {
	return src(files.jsSource)
	.pipe(concat('scripts.js'))
	.pipe(dest('./assets/')
	);
}

function watchTask() {
	watch([files.scssSource, files.jsSource],
		{interval: 1000, usePolling: true},
		series(
			parallel(sassTask, jsTask)
		)
	);
}

exports.default = series(
	parallel(sassTask, jsTask), watchTask
);

