module.exports = function ( grunt ) {

	grunt.initConfig( {

		jshint: {

			task: ['src/**/*.js', 'tests/**/*.js'],
			options: { jshintrc: true }

		},

		watch: {
			
			scripts: {

				files: ['src/**/*.js', 'tests/**/*.js'],
				tasks: ['jshint'],
				options: { spawn: false	}

			}

		}

	} );

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

};