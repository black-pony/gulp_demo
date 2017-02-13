var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var spriter = require('gulp-spriter');

gulp.task('html',function(){
  gulp.src('1.html')
      .pipe(htmlmin({removeComments:true,collapseWhitespace:true,collapseBooleanAttributes:true,removeEmptyAttributes:true,removeScriptTypeAttributes:true,removeStyleLinkTypeAttributes:true,minifyCSS:true,minifyJS:true}))
      .pipe(gulp.dest('./dist'));
});

// gulp.task('a',function(){
//   console.log(666);
// })

// gulp.task('myWatch',function(){
//   gulp.watch(['./1.html','./2.html'],['a']);
// });
gulp.task('watch',function(){
  browserSync.init({
    server:{
      baseDir:'./dist'
    },
    files:['./dist/*.html']
  });
  gulp.watch(['./1.html'],['html']);
});


gulp.task('default',function(){
  gulp.src('./images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
});

gulp.task('css',function(){
  return gulp.src('./style.css')//原始的css文件地址
             .pipe(spriter({
               sprite:'test.png',//合并后的名字
               slice:'./slice',//原始小图片路径
               outpath:'build/tests'//合并后的大图的地址
             }))
             .pipe(gulp.dest('./build/css'));//合并后的css的文件地址
})
