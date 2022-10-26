
const mix = require('laravel-mix');

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
