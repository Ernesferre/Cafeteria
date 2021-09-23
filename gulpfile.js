
// var gulp = require('gulp');
// var sass = require('gulp-sass')(require('sass'));

// gulp.task('sass', function (){
//   return gulp.src('src/scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('build/css'));
// });


// gulp.task('sass:watch', function () {
//   gulp.watch('src/scss/**/*.scss', ['sass']);
// });


// const gulp = require('gulp')
const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')


function css (done) {

    src('src/scss/app.scss')
        .pipe( sass())
        .pipe( postcss([autoprefixer()]))
        .pipe( dest('build/css'))

    done();
}


function dev() {
    watch( 'src/scss/**/*.scss', css)
    // done()
}


exports.css = css;
exports.dev = dev;
exports.default = series( css, dev)
