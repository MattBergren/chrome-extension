module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		concat: {
			release: {
				src: [
					'js/values.js', 
					'js/prompt.js', 
					'js/getImages.js', 
					'js/replaceImages.js', 
					'js/main.js'
				],
				dest: 'release/main.js'
			}
		},
		copy: {
			release: {
				src: 'manifest.json',
				dest: 'release/manifest.js'
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: ['release/main.js']
		},
		jasmine: {
			test: {
				src: [
					'js/values.js',
					'js/prompt.js',
					'js/getImages.js',
					'js/replaceImages.js',
					'js/main.js'
				],
				options: {
					specs: 'test/*.js'
				}
			}
		},
		watch: {
			files: ['js/*.js', 'manifest.json'],
			tasks: ['default']
		}
	});

	// Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', ['concat', 'jshint', 'copy']);
};