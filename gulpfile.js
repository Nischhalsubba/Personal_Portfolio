/*
 * Build pipeline for the legacy personal portfolio.
 * Compiles Sass, bundles authored JavaScript, copies image assets, refreshes
 * cache-busting query values, and provides a watch task for local development.
 */

"use strict";

const { src, dest, watch, series, parallel } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass/legacy")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");

const files = {
  scssPath: "./assets/sass/**/*.scss",
  jsPath: "./assets/js/**/*.js",
  imgPath: "./assets/Images/**",
};

/** Compiles Sass into optimized CSS under the generated dest directory. */
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./dest/"));
}

/** Bundles and minifies authored browser JavaScript into the generated js folder. */
function jsTask() {
  return src(files.jsPath, { allowEmpty: true })
    .pipe(concat("app.js"))
    .pipe(terser())
    .pipe(dest("./js/"));
}

/** Copies portfolio image assets into the generated destination tree. */
function images() {
  return src(files.imgPath, { allowEmpty: true }).pipe(dest("./dest/Images/"));
}

const cacheBustValue = Date.now();

/** Refreshes existing cache-busting query values in root HTML pages. */
function cacheBustTask() {
  return src(["./*.html"])
    .pipe(replace(/cb=\d+/g, `cb=${cacheBustValue}`))
    .pipe(dest("."));
}

/** Watches maintained source files and rebuilds the affected generated assets. */
function watchTasks() {
  return watch(
    [files.scssPath, files.jsPath, files.imgPath],
    parallel(scssTask, jsTask, images),
  );
}

const build = series(parallel(scssTask, jsTask, images), cacheBustTask);

exports.build = build;
exports.default = series(build, watchTasks);
