var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sp', function() {
    gulp.src('temp/*.png').pipe(spritesmith({
        imgName: 'icon.png',
      	cssName: 'icon.css'
    })).pipe(gulp.dest('dist/'));
});