const path = require('path')

module.exports = (conf, argv) => {
  const {
    entry,
    outputPath
  } = argv

  return {
    entry,
    output: {
      path: path.resolve(__dirname, `./lib`, outputPath),
      filename: 'munderscore.js',
      library: 'MUnderscore',
      libraryTarget: 'umd',
    }
  }
}