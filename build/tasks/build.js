var gulp = require('gulp');

gulp.task('build',
	[
        'scss',
	    'js',
	    'font',
	    'img',
        'iconfont:copy'
	]
);

gulp.task('build:dev',
	[
        'scss:dev',
		'js:dev'
	]
);
