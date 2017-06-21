var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    gulpWait = require('gulp-wait'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(gulpWait(500))
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'expanded', includePath: ['scss/partials'] }).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['>0%'] }))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scss/partials/*.scss', ['sass']);
})

gulp.task('default', ['watch', 'sass', 'webserver']);