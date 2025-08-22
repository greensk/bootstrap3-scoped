const sass = require('node-sass')
const fsPromises = require('fs/promises')

async function run () {
  console.log(process.argv[2])
  let [ prefix, outputFile ] = String(process.argv[2] || '').split()

  if (!outputFile) {
    outputFile = 'bootstrap3-scoped.css'
  }
  if (!prefix) {
    console.log('noprefix')
    prefix = '.bootstrap'
  }
  console.log(prefix)
  await fsPromises.writeFile(
    'index.sass',
    `${prefix}\n\t@import "bootstrap/bootstrap.min";\n\t@import "bootstrap/bootstrap-theme.min";\n`
  )
  sass.render({
    file: 'index.sass',
    includePaths: ['bootstrap'],
    outputStyle: 'expanded',
  }, async function(err, result) {
    if (!err) {
      await fsPromises.writeFile(outputFile, result.css)
      console.log(`${outputFile} written!`)
    } else {
      console.error(err)
    }
  })
}

run()
