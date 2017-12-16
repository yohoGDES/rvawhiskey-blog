module.exports = {
    // Setup the domain to be used by BrowserSync
    browserSync: {
        target: "rvawhiskey-blog:8888",
        host: "rvawhiskey-blog"
    },
    pipeline: {
        fonts: {
            src: "assets/source/fonts/**/*",
            dest: "assets/public/fonts"
        },
        images: {
            src: "assets/source/images/**/*.{png,gif,jpg}",
            dest: "assets/public/images"
        },
        svg: {
            src: "assets/source/images/**/*.svg",
            dest: "assets/public/images"
        }
    },
    scripts: {
        dir: {
            src: "assets/source/scripts",
            dest: "assets/public/scripts"
        },
        source: {
            header: "distillery_header_scripts.js",
            theme: "distillery_scripts.js"
        }
    },
    styles: {
        src: "assets/source/styles",
        dest: "assets/public/styles"
    },
    watch: {
        // php: "**/*.php",
        html: "**/*.html",
        scripts: "assets/source/scripts/**/*.js",
        styles: "assets/source/styles/**/*.scss",
        fonts: "assets/source/fonts/**/*",
        images: "assets/source/images/**/*.{png,gif,jpg}",
        svg: "assets/source/images/**/*.svg",
        public: "assets/public/**/*"
    }
}
