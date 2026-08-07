"use strict";
const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass/legacy')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');

const imageminModule = import('gulp-imagemin');

const files = {
    scssPath: './assets/sass/**/*.scss',
    jsPath: './assets/js/**/*.js',
    imgPath: './assets/Images/**'
};

function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dest/'));
}

function jsTask() {
    return src(files.jsPath)
        .pipe(concat('app.js'))
        .pipe(terser())
        .pipe(dest('./js/'));
}

function images() {
    return imageminModule.then(({ default: imagemin, gifsicle, optipng, svgo }) =>
        new Promise((resolve, reject) => {
            const stream = src(files.imgPath)
                .pipe(imagemin([
                    gifsicle({ interlaced: true }),
                    optipng({ optimizationLevel: 5 }),
                    svgo({
                        plugins: [{
                            name: 'preset-default',
                            params: {
                                overrides: {
                                    removeViewBox: false
                                }
                            }
                        }]
                    })
                ]))
                .pipe(dest('./dest/Images/'));

            stream.on('end', resolve);
            stream.on('error', reject);
        })
    );
}

const cbString = new Date().getTime();

function cacheBustTask() {
    return src(['./*.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

function watchTasks() {
    watch([files.scssPath, files.jsPath, files.imgPath],
        parallel(scssTask, jsTask, images)
    );
}

const build = series(
    parallel(scssTask, jsTask, images),
    cacheBustTask
);

exports.build = build;
exports.default = series(build, watchTasks);
