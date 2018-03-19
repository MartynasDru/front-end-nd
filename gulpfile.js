const gulp = require("gulp");
const sass = require("gulp-sass");

//Compile sass
gulp.task("sass", function(){
  return gulp.src(["src/scss/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
});

//Watch & Serve
gulp.task("serve", ["sass"]);
gulp.watch(["src/scss/*.scss"], ["sass"]);

//default
gulp.task("default", ["serve"]);
