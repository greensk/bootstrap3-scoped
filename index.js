const sass = require('node-sass')
const fsPromises = require('fs/promises')

async function run () {
  const prefix = process.argv[2] || '.bootstrap'
  const outputFile = process.argv[3] || 'bootstrap3-scoped.css'
  
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
