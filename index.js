const sass = require('node-sass')
const fsPromises = require('fs/promises')

const outputFile = 'bootstrap3-scoped.css'

async function run () {
  sass.render({
    file: 'index.sass',
    includePaths: ['bootstrap'],
    outputStyle: 'expanded',
  }, async function(err, result) {
    console.log(result)
    if (!err) {
      await fsPromises.writeFile(outputFile, result.css)
    } else {
      console.error(err)
    }
  })
}

run()
