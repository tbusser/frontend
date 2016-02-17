 var gulp = require('gulp'),
     dest = global.getDest('font'),
     src = global.getSrc('font');

/**
 * Copies font from the source to the destination folder
 */
 function runFont() {
     return gulp
         .src(src)
         .pipe(
             gulp.dest(dest)
         );
 }

 gulp.task('font', ['clean:font'], runFont);
