var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');


var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('jshint', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(jshint());
})
gulp.task('sass:expanded', function() {
  return gulp.src('./src/scss/index.scss')
    .pipe(sass({ outputStyle: 'expanded'}))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('src'));
})

gulp.task('sass:compressed', function() {
  return gulp.src('./src/scss/index.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('src'));
})

gulp.task('concat', function(){
  return gulp.src(['./js/app.js', './src/js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('src'));
})

gulp.task('uglify', function(){

  return gulp.src('/src/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('src'));
});

gulp.task('replace:development', function(){
  return gulp.src('index.html')
    .pipe(replace(/app\.min\.js/, 'app.js'))
    .pipe(replace(/app\.min\.css/, 'app.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('replace:production', function(){
  return gulp.src('index.html')
    .pipe(replace(/app\.js/, 'app.min.js'))
    .pipe(replace(/app\.css/, 'app.min.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('connect', function () {
  connect.server({
    middleware: function (connect, opt) {
      var Proxy = require('gulp-connect-proxy');
      opt.route = '/proxy';
      var proxy = new Proxy(opt);
      return [proxy];
    }
  });
});

gulp.task('build', ['concat', 'sass:expanded', 'uglify', 'connect'], function(){
  livereload.listen();
    gulp.watch(['./src/**/*', 'index.html'], ['jshint', 'sass:expanded', 'concat', 'uglify', 'replace:development', function(){
      livereload.reload('index.html')
  }]);
})


