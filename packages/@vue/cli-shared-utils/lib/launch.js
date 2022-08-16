const launch = require('launch-editor')

exports.launch = (...args) => {
  const file = args[0]
  console.log(`Opening ${file}...`)
  let cb = args[args.length - 1]
  if (typeof cb !== 'function') {
    cb = null;
  }
  launch(...args, (fileName, errorMessage) => {
    console.error(`Unable to open '${fileName}'`, errorMessage)

    if(cb) cb(fileName, errorMessage)
  })
}