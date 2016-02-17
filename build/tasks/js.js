var gulp = require('gulp'),
    rjs = require('requirejs'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    dest = global.getDest('js'),
    outputFile =  dest + '/main.js',
    rjsConfig = {
        baseUrl: global.getSrc('js'),
        name: 'vendor/almond/almond',
        include: ['bootstrap'],
        mainConfigFile: global.getSrc('rjs-config'),
        insertRequire: ['bootstrap'],
        optimize: ['none'],
        out: outputFile
    };

/**
 * The main development JavaScript build
 */
function runJSBuild(cb) {
    'use strict';

    rjs.optimize(
        rjsConfig,
        function handleComplete() {
            cb();
        }
    );
}

/**
 * The minified production JavaScript build
 */
function runMinJSBuild() {
    'use strict';

    return gulp.src(outputFile)
        .pipe(uglify({
            compress: {
                'drop_console': true
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(dest));
}



gulp.task('js', ['js:dev', 'js:min']);

gulp.task('js:dev', runJSBuild);

gulp.task('js:min', ['js:dev'], runMinJSBuild);