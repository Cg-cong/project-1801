//在nodejs环境下运行的js文件
//按照nodejs的语法使用


// 引用模块：require()
// gulp,gulp-sass

let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('compileSass',function(){
    // 先查找sass文件所在目录
    gulp.src('./src/sass/*.scss') // 返回文件流（液体，文件在内存中的状态）

    // scss->css
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))

    // 输出到硬盘
    .pipe(gulp.dest('./src/css/'))
});


// 监听文件修改，自动执行编译任务
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])

})


// 自动刷新
let browserSync = require('browser-sync');

gulp.task('server',()=>{
    browserSync({
        // server:'./src/',
        // 代理服务器
        proxy:'http://localhost:199',

        port:666,

        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });
    gulp.watch('./src/sass/*.scss',['compileSass'])
})