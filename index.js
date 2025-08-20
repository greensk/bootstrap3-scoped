/*
const sass = require('sass');
const result = sass.compile(
  'index.sass',
  {
  }
);
// console.log(result);
result.css.toString()

*/
/*
var sass = require('node-sass');
sass.render(
  {
    file: 'index.sass',
    importer: (fileName) => {
      console.log(fileName)
    }
  },
  function(err, result) {
    // console.log(result)
    result.css.toString()
  }
);
*/
const sass = require('node-sass');

sass.render({
  file: 'index.sass',
  includePaths: ['bootstrap'],
  outputStyle: 'expanded',
}, function(err, result) {
  if (!err) {
    console.log(result.css.toString());
  } else {
    console.error(err);
  }
});
