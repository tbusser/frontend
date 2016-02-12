/**
 * Copy project files to Styleguide folders
 */
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    watchAll = '/**/*',
    styleguidePathSrc = global.getRoot('styleguide') + '/source'; // path to source folder of patternlab


/**
 * Copy functions 
 */
function copyJs() {
    return gulp.src(global.getDest('js') + watchAll)
        .pipe(gulp.dest(styleguidePathSrc + '/js'));
}

function copyCss() {
    return gulp.src(global.getDest('scss') + watchAll)
        .pipe(gulp.dest(styleguidePathSrc + '/css'));
}

function copyFonts() {
    return gulp.src(global.getDest('font') + watchAll)
        .pipe(gulp.dest(styleguidePathSrc + '/fonts'));
}

function copyImg() {
    return gulp.src(global.getDest('img') + watchAll)
        .pipe(gulp.dest(styleguidePathSrc + '/images'));
}



/**
 * Watch all generated files in dist folder 
 */
function watchDistFolder(folder, func) {
    watch(
        global.getDest(folder) + watchAll,
        func
    );
}

function watchDistFiles() {
    watchDistFolder('js', copyJs);
    watchDistFolder('scss', copyCss);
    watchDistFolder('font', copyFonts);
    watchDistFolder('img', copyImg);
}


/**
 * Copy all generated files in dist folder to styleguide
 */
function copyDistFiles() {
    copyJs();
    copyCss();
    copyFonts();
    copyImg();
}



gulp.task('styleguide:watch', watchDistFiles); // Set watcher on dist folder. Copy files on change to styleguide

gulp.task('styleguide:copy', copyDistFiles); // Copy all dist files once to styleguide 
