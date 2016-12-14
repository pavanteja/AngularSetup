/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('default', function () {
    // place code for your default task here
});




// Run test once and exit
gulp.task('Unit_Test', function (done) {
    console.log(__dirname)
    new Server({
        configFile: __dirname + '\\node_modules\\.bin\\karma.conf.js',
        singleRun: false
    }, done).start();
});