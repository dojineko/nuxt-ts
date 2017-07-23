import * as gulp from 'gulp'
import tslint from 'gulp-tslint'

const target = [
  '**/*.js',
  '**/*.ts',
  '!.nuxt/**/*',
  '!dist/**/*',
  '!node_modules/**/*',
]

const lintOptions = {
  formatter: 'verbose',
}

gulp.task('lint', () => {
  gulp
    .src(target)
    .pipe(tslint(lintOptions))
    .pipe(tslint.report())
})

gulp.task('lint:fix', () => {
  gulp
    .src(target)
    .pipe(tslint({...lintOptions, ...{fix: true}}))
    .pipe(tslint.report())
})
