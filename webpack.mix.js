
const mix = require('laravel-mix');
const glob = require('glob');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
let production = mix.inProduction();

mix.setPublicPath('public/');


if(!production) {
    mix.copy('resources/images', 'public/images')
}


// ------------- Scss glob --------------

let scssFiles = glob.sync('resources/scss/**/*.scss', {"ignore": 'resources/scss/includes/**'});

length = scssFiles.length;

for(let i = 0; i < length; i++) {

    mix.sass(scssFiles[i], scssFiles[i].replace('resources/scss', 'public/css').replace('.scss', '.css')).options({
        processCssUrls: false
    });
}


mix.js('resources/js/app.js', 'public/js').vue()
    .webpackConfig(require('./webpack.config'))
    .sourceMaps(!production, 'source-map')
    .disableNotifications()
    .browserSync({
        proxy: process.env.APP_URL,
        notify: false,
        open: false
    });


if (production) {
    mix.version(['public/images']);
}
