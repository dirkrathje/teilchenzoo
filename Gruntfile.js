module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmllint: {
        all: ["besucherfragen/index.html"]
    },
    connect: {
      server: {
      options: {
        port: 9001,
        base: ''
      }
    }
  }  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-html');

// Default task(s).
//  grunt.registerTask('default', ['connect']);

};
