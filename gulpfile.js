const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Gulp task для поднятия локального сервера
gulp.task('server', function() {
	browserSync.init({
			server: {
					baseDir: "./src/"
			}
	});
});