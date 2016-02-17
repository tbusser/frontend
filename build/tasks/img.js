var gulp = require('gulp'),
    //imageopt = require('gulp-image-optimization'),
    src = global.getSrc('img'),
    dest = global.getDest('img'),
    optConfig = {
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    };
    

/**
 * Copies images from source to destination folder and optimizes them
 * Slow :( - Try to only use this before you deploy your images
 */
function runImgOpt(cb) {
    return gulp.src(src)
        .pipe(imageopt(optConfig))
        .pipe(gulp.dest(dest))
        .on('end', cb)
        .on('error', cb);
}

//gulp.task('img:opt', ['clean:img'], runImgOpt);

/**
 * Simply copies images from source to destination folder
 * Fast! :) - Use this in your usual building process
 */
function runImg(cb) {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
}

gulp.task('img', ['clean:img'] runImg);
