const gulp = require('gulp');
const template = require('gulp-template');
const babelrc = require('@pyxis/webpack/build/parts/ts/babelrc/.babelrc.json');
const { resolve } = require('path');
 
gulp.task('default', () =>
    gulp.src('src/typescript/package.json')
        .pipe(template({
          APP_DIRNAME: resolve("../components"),
          BABEL: JSON.stringify(babelrc),
        }))
        .pipe(gulp.dest('build/typescript'))
);