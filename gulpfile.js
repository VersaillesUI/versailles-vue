const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('build:esm', (done) => {
  
  gulp.src(['packages/**/*.ts', 'packages/**/*.json', 'packages/**/*.less'])
    .pipe(gulp.dest('esm'))

  gulp.src(['packages/**/*.js'])
    .pipe(babel({
      "presets": [
        "@babel/preset-env"
      ],
      "plugins": [
        "module:@vue/babel-plugin-transform-vue-jsx",
        "@babel/plugin-syntax-class-properties",
        "@babel/plugin-proposal-class-properties",
        [
          "@babel/plugin-proposal-decorators", {
            "legacy": true
          }
        ]
      ]
    }))
    .pipe(gulp.dest('esm'))

  done()
})