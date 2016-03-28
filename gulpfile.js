/**
 * Created by Daniel on 2016/3/28.
 */
var gulp             = require('gulp');
var del              = require('del');
var typescript       = require('gulp-typescript');
var typescriptConfig = {
    "module"   : "commonjs",
    "jsx"      : "react",
    "target"   : "es3",
    "sourceMap": true
};
var webpack          = require('webpack');
var webpackConfig    = require('./webpack.config.js');

var PATH = {

    src    : {
        html: 'src/*.html',
        css : 'src/*.css',
        tsx : 'src/*.tsx'
    },
    build  : {
        tsx: 'build'
    },
    release: {
        html: 'release',
        css : 'release'
    }
};

//
// gulp.task('html',function () {
//     gulp.src(PATH.src.html);
// });