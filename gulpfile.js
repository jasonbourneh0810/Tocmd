var gp_deploy = require('gulp-gh-pages');
var gulp=require('gulp');
var options = {}
gulp.task('deploy', function () {
    return gulp.src('./preview/**/*')
        .pipe(gp_deploy(options));
});
