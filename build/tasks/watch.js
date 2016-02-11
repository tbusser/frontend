/**
 * Watch tasks for all the known files/actions
 */
/* globals global */
var gulp = require('gulp'),
    watch = require('gulp-watch');

/**
 * Wrapper function for all watch tasks
 *
 * @function runWatch
 */
function runWatch() {
    'use strict';

    /**
     * Watch SASS files for changes and run the css tasks
     *
     * @function watchCss
     */
    function watchCss() {
        gulp.start('scss:dev');
    }

     watch(
         global.getSrc('scssFiles'),
         watchCss
     );

    /**
     * Watch JS files for changes and run the javascript tasks
     *
     * @function watchJs
     */
    function watchJs() { 
        gulp.start('js:dev');
    }

    watch(
        global.getSrc('jsFiles'),
        watchJs
    );

    /**
     * Watch image files for changes and run the image tasks
     *
     * @function watchImg
     */
    function watchImg() {
        gulp.start('img');
    }

    watch(
        global.getSrc('img'),
        watchImg
    );


    /**
     * Watch font files for changes and run the font tasks
     *
     * @function watchFont
     */
    function watchFont() {
        gulp.start('font');
    }

    watch(
        global.getSrc('font'),
        watchFont
    );

    /**
     * Watch icon font files for changes and run the font tasks
     *
     * @function watchFont
     */
    function watchIconFont() {
        gulp.start('iconfont');
    }

    watch(
        global.getSrc('icons') + '/*.svg',
        watchIconFont
    );


    /**
     * Watch all dist files for styleguide update
     *
     * Also see styleguide.js task
     */
    gulp.start('styleguide:watch'); 

}


gulp.task(
    'watch',
    runWatch
);
