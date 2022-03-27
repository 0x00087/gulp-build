import webpack from 'webpack-stream'

export const code = () => {
 return app.gulp
  .src(app.path.source.code, { sourcemaps: app.isDev })
  .pipe(
   app.plugins.plumber(
    app.plugins.notify.onError({
     title: 'JS',
     message: 'Error: <%= error.message %>',
    })
   )
  )
  .pipe(
   webpack({
    mode: app.isBuild ? 'production' : 'development',
    output: {
     filename: 'app.min.js',
    },
   })
  )
  .pipe(app.gulp.dest(app.path.build.code))
  .pipe(app.plugins.browsersync.stream())
}
