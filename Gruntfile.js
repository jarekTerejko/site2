module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'sass/style.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src-img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/'
        }]
            }
        },

        watch: {
            scripts: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },

//        browserSync: {
//            bsFiles: {
//                src: 'css/*.css'
//            },
//            options: {
//                server: {
//                    baseDir: "./"
//                }
//            }
//        }

         browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }


    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch' ]);
};
