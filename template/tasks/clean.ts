import * as gulp from 'gulp'
import * as del from 'del'

gulp.task('clean', () => {
  del.sync([
    '.nuxt',
    'dist',
  ])
})
