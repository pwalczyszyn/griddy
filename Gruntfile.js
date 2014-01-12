/* jshint node:true */

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.initConfig({

        copy: {
            all: {
                // This copies all the html and css into the dist/ folder
                expand: true,
                cwd: 'src/',
                src: ['**/*.html', '**/*.css'],
                dest: 'dist/',
            },
        },
        concat: {
            build: {
                src: ['src/scripts/app.prefix', 'src/scripts/*.js', '<%= html2js.main.dest %>', 'src/scripts/controllers/*.js', 'src/scripts/app.suffix'],
                dest: 'build/scripts/app.js'
            }
        },
        recess: {
            dist: {
                options: {
                    compile: true
                },
                files: {
                    'build/css/style.css': ['src/css/bootstrap.less', 'src/css/style.less']
                }
            }
        },
        html2js: {
            options: {
                rename: function (moduleName) {
                    return moduleName;
                }
            },
            main: {
                src: ['src/templates/**/*.tpl.html'],
                dest: 'build/scripts/templates.js'
            },
        },
        watch: {
            all: {
                files: 'src/**',
                tasks: ['default'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', ['recess', 'html2js', 'concat:build']);
};
