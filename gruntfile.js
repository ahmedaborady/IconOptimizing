/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      files:['js/*.js'],
      options: {
        curly: true,
        eqeqeq: false,
        immed: true,
        latedef: false,
        newcap: false,
        noarg: true,
        sub: true,
        undef: false,
        unused: false,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }

    },
    autoprefixer: {
      options: {
        // Task-specific options go here.
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1']
      },
      single_file: {
        // Target-specific file lists and/or options go here.
        src: 'css/MainStyle.css',
        dest: 'css/MainStyle_prefixed.css'
      }
    },
    uglify: {

      my_target:{
        options:{
          banner:'/*ICONAD BUILD 002 ABORADY*/',
          mangle:false
        },
      files:{
        'dist/js/iconScripts.min.js':['js/iconScripts.js']
      }
      }

    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target:{
        files:{
        'dist/css/iconStyle.min.css': ['css/iconStyle-main.css']
        }
      }
    },


    watch: {
      css: {
        files: ['css/*.scss','transitions/css/*.css'],
        tasks: ['sass','cssmin','ftpush:build2'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['js/*.js'],
        tasks: ['jshint','uglify','ftpush:build1'],
        options: {
          livereload: true
        }
      },

      livereload: {

        options: {
          livereload: true
        },
        files: [
          '*.html',
          'css/*.css',
          'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    ftpush: {
      build1: {
        auth: {
          host: 'icon-ad.com',
          port: 21,
          authKey: 'key1'
        },
        src: 'dist/js',
        dest: 'public_html/icon-ad/dist/2/js',
        exclusions: ['dist/**/.DS_Store', 'pdist/**/Thumbs.db', 'dist/tmp']
      },
      build2: {
        auth: {
          host: 'icon-ad.com',
          port: 21,
          authKey: 'key1'
        },
        src: 'dist/css',
        dest: 'public_html/icon-ad/dist/2/css',
        exclusions: ['dist/**/.DS_Store', 'pdist/**/Thumbs.db', 'dist/tmp']
      }
    }

    /*watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'nodeunit']
      }
    }*/
  });

  // These plugins provide necessary tasks.

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-ftpush');

  grunt.loadNpmTasks('grunt-serve');


  // Default task.
  grunt.registerTask('default', ['jshint','uglify','cssmin','sass','watch']);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'connect',
      'watch'
    ]);
  });

};
