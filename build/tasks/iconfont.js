var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    runTimestamp = Math.round(Date.now() / 1000),
    iconfontName = 'icon-font',
    src = global.getSrc('icons'), // source files (svg's & config)
    svgSrc = src + '/*.svg', // svg icons location
    template = src + '/_iconfont.template.scss', // config file for generating '_generated.icons.scss'
    generatedScssInclude = '_generated.icons.scss', // include sccs file with generated icon classes (relative path!!)
    dest = global.getDest('icons'); // destination file to place fonts


var settings = {
    copyFontFiles: '/**/*.{woff,woff2,ttf}',
    generateFormats: ['woff', 'woff2', 'ttf']
}

/**
 * Copies font from the source to the destination folder
 */
 function createIconFont() {
     var runTimestamp = Math.round(Date.now() / 1000);

        gulp
         .src(svgSrc)
            .pipe(
                iconfontCss({
                    fontName: iconfontName, // The name of the generated font family (required)
                    path: template, // The template path
                    targetPath: generatedScssInclude // The path where the (S)CSS file should be saved, relative to the path used in gulp.dest()
                    //fontPath: '../../src/icons' // Directory of font files relative to generated (S)CSS file (optional, defaults to ./)
                })
            ) 
            .pipe(
                iconfont({
                    fontName: iconfontName,
                    formats: settings.generateFormats,
                    timestamp: runTimestamp,
                    normalize: true
                })
            )
            .pipe(gulp.dest(dest));
       
        gulp
         .src(dest + settings.copyFontFiles)
            .pipe(gulp.dest(src)); // copy generated files to src folder (SVG/TTF/EOT/WOFF/WOFF2)
}



/**
 * Copies iconfont from the source to the destination folder
 */
 function copyIconFont() {
     return gulp
         .src(src + settings.copyFontFiles)
         .pipe(
             gulp.dest(dest)
         );
 }



/**
 * Tasks
 */
gulp.task('iconfont', createIconFont); // create font
gulp.task('iconfont:copy', copyIconFont); // copy font to dist