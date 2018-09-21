'use strict';
module.exports = function(grunt) {
    //按需加载npm tasks模块,加速loading
    require('jit-grunt')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    console.log("..grunt运行中");
    // Load grunt tasks automatically
    //require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-envify');

    grunt.initConfig({
        envify: {
            lego: {
                options: {
                    env: {
                        NODE_ENV: 'production'
                    }
                },
                files: {
                    './dist/js/lego.js': ['./dist/js/lego-o.js']
                }
            }
        },
        tmod: {
            'demo-index': {
                src: './src/demo/index/views/*.html',
                dest: './src/',
                options: {
                    "base": './src/',
                    "output": "./dest",
                    "charset": "utf-8",
                    "syntax": "native",
                    "helpers": null,
                    "escape": true,
                    "compress": true,
                    "type": "commonjs",
                    "runtime": "template.js",
                    "combo": true,
                    "minify": true,
                    "cache": false,
                    "alias": '../../../template'
                }
            },
            'demo-basic': {
                src: './src/demo/basic/views/*.html',
                dest: './src/',
                options: {
                    "base": './src/',
                    "output": "./dest",
                    "charset": "utf-8",
                    "syntax": "native",
                    "helpers": null,
                    "escape": true,
                    "compress": true,
                    "type": "commonjs",
                    "runtime": "template.js",
                    "combo": true,
                    "minify": true,
                    "cache": false,
                    "alias": '../../../template'
                }
            },
            'demo-assemble': {
                src: './src/demo/assemble/views/*.html',
                dest: './src/',
                options: {
                    "base": './src/',
                    "output": "./dest",
                    "charset": "utf-8",
                    "syntax": "native",
                    "helpers": null,
                    "escape": true,
                    "compress": true,
                    "type": "commonjs",
                    "runtime": "template.js",
                    "combo": true,
                    "minify": true,
                    "cache": false,
                    "alias": '../../../template'
                }
            }
            
        },
        browserify: {
            'release': {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    alias: {
                        "lego": "./src/utils/gum.vue.manager.js",
                        "events": "./src/utils/gum.vue.events.js"
                    },
                    external: [
                        'fcontroller'
                    ]
                },
                src: [],
                dest: './dist/js/lego-o.js'
            },

            'demo-index': {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'fcontroller', 'lego'
                    ]
                },
                src: ['./src/demo/index/controller/index.controller.js'],
                dest: './webroot/modules/demo/index/index.js',
                
            },
            'demo-basic': {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'fcontroller', 'lego'
                    ]
                },
                src: ['./src/demo/basic/controller/basic.controller.js'],
                dest: './webroot/modules/demo/basic/basic.js'
            },
            'demo-assemble': {
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    external: [
                        'fcontroller', 'lego', 'events'
                    ]
                },
                src: ['./src/demo/assemble/controller/assemble.controller.js'],
                dest: './webroot/modules/demo/assemble/assemble.js'
            }
            
        },
        uglify: {
            build:{
                src: ['./dist/js/lego.js'],
                dest: './dist/js/lego.min.js'
            } 
        },
        copy: { 
            demo: {
                files: [
                    {
                        src: "./src/demo/index/css/demo.index.css",
                        dest: "./webroot/css/demo.index.css"
                    },
                    {
                        src: "./src/demo/basic/css/demo.basic.css",
                        dest: "./webroot/css/demo.basic.css"
                    },
                    {
                        src: "./src/demo/assemble/css/demo.assemble.css",
                        dest: "./webroot/css/demo.assemble.css"
                    },
                    {
                        src: "./dist/css/iconfont/iconfont.eot",
                        dest: "./webroot/css/iconfont/iconfont.eot"
                    },
                    {
                        src: "./dist/css/iconfont/iconfont.svg",
                        dest: "./webroot/css/iconfont/iconfont.svg"
                    }, 
                    {
                        src: "./dist/css/iconfont/iconfont.ttf",
                        dest: "./webroot/css/iconfont/iconfont.ttf"
                    }, 
                    {
                        src: "./dist/css/iconfont/iconfont.woff",
                        dest: "./webroot/css/iconfont/iconfont.woff"
                    }, 
                    {
                        src: "./dist/css/gum-lego.css",
                        dest: "./webroot/css/gum-lego.css"
                    }, 
                    {
                        src: "./dist/css/lego.css",
                        dest: "./webroot/css/lego.css"
                    },
                    {
                        src: "./dist/js/lego.js",
                        dest: "./webroot/js/lego.js"
                    }
                ]
            },
            
            iconfont: {
                files: [{
                    src: "./src/sass/iconfont/iconfont.eot",
                    dest: "./dist/css/iconfont/iconfont.eot"
                }, {
                    src: "./src/sass/iconfont/iconfont.svg",
                    dest: "./dist/css/iconfont/iconfont.svg"
                }, {
                    src: "./src/sass/iconfont/iconfont.ttf",
                    dest: "./dist/css/iconfont/iconfont.ttf"
                }, {
                    src: "./src/sass/iconfont/iconfont.woff",
                    dest: "./dist/css/iconfont/iconfont.woff"
                }]
            }
        },
        clean: {
            lego: {
                src: [ './src/**/*.vue.js', './webroot/css/*.map' ]
            },
            demo: {
                src: ['./src/demo/index/views/*.js', './src/demo/basic/views/*.js', './src/demo/assemble/views/*.js']
            }
        },
        sass: {
            release: {
                options: {
                    sourcemap: false
                },
                files: {
                    './dist/css/lego.css': './src/sass/lego.scss',
                    './dist/css/gum-lego.css': './src/sass/gum-lego.scss'
                }
            }
        },
        cssmin: {
            release: {
                options: {
			    	mergeIntoShorthands: false,
			    	roundingPrecision: -1
			  	},
		    	files: {
		      		'./dist/css/lego.min.css': './dist/css/lego.css',
                    './dist/css/gum-lego.min.css': './dist/css/gum-lego.css'
		    	}
            }
        },
        vueify: {
            lego: {
                files: [{
                    expand: true,
                    src: './src/**/*.vue',
                    dest: './',
                    ext: '.vue.js'
                }]
            }
        }
        
    });

    /* grunt 全部 */
    grunt.registerTask('lego', [
        "vueify", 
        "tmod", 
        "browserify",
        "envify:lego",
        "sass", 
        "copy",
        "cssmin",
        "uglify",
        "clean"
    ]);
    /* grunt demo 部分 */
    grunt.registerTask('demo', [
        "tmod:demo-index",
        "tmod:demo-basic",
        "tmod:demo-assemble",

        "browserify:demo-index",
        "browserify:demo-basic",
        "browserify:demo-assemble",

        "copy:demo",
        "clean:demo"
    ]);
    /* grunt 到 dist 文件夹 */
    grunt.registerTask('release', [
        "vueify", 
        "browserify:release",
        /*"uglify", */
        "sass:release",
        "cssmin:release",
        "copy:iconfont",
        "clean"
    ]);
    
};

