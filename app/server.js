const browserSync = require('browser-sync').create();

browserSync.init({
    watch: true,
    server: "./src",
    port: 4444,
    open: false,
    notify: false,
    files: "./src/**/*",
});
