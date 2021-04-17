const browserSync = require('browser-sync');
const gulp = require('gulp');

gulp.task('build', function(cb) {
  console.log('Building site');
  setTimeout(cb, 1200);
});

gulp.task('serve', function(cb) {
  browserSync.init({
    server: './www',
    port: 8000
  });

  gulp.watch('www/*.html').on('change', browserSync.reload);
})

gulp.task('default', gulp.series('build', 'serve'));
