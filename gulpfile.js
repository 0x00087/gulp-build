import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
 path: path,
 gulp: gulp,
 plugins: plugins,
 isBuild: process.argv.includes('--build'),
 isDev: !process.argv.includes('--build'),
}

//Импорт задач
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { css } from './gulp/tasks/css.js'
import { code } from './gulp/tasks/code.js'
import { images } from './gulp/tasks/images.js'
import { otf2Ttf, ttf2WoFF, fontsStyle } from './gulp/tasks/fonts.js'
import { zip } from './gulp/tasks/zip.js'

function watcher() {
 gulp.watch(path.watch.files, copy)
 gulp.watch(path.watch.html, html)
 gulp.watch(path.watch.css, css)
 gulp.watch(path.watch.code, code)
 gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(otf2Ttf, ttf2WoFF, fontsStyle)
const mainTasks = gulp.series(
 fonts,
 gulp.parallel(copy, html, css, code, images)
)
const devTasks = gulp.parallel(watcher, server)

//Режимы работы
export const dev = gulp.series(reset, mainTasks, devTasks)
export const build = gulp.series(reset, mainTasks)
export const deployZIP = gulp.series(reset, mainTasks, zip)

gulp.task('default', dev)
