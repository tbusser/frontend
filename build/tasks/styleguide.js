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
function copyFiles(src,dest) {
    return gulp.src(global.getDest(src) + watchAll)
        .pipe(gulp.dest(styleguidePathSrc + '/' + dest));
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
    watchDistFolder('js', copyFiles('js','js'));
    watchDistFolder('scss', copyFiles('scss', 'css'));
    watchDistFolder('font', copyFiles('font', 'fonts'));
    watchDistFolder('img', copyFiles('img', 'images'));
}


/**
 * Copy all generated files in dist folder to styleguide
 */
function copyDistFiles() {
    copyFiles('js', 'js');
    copyFiles('scss', 'css');
    copyFiles('font', 'fonts');
    copyFiles('img', 'images');
}



gulp.task('styleguide:watch', watchDistFiles); // Set watcher on dist folder. Copy files on change to styleguide

gulp.task('styleguide:copy', copyDistFiles); // Copy all dist files once to styleguide 
