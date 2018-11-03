const path = require('path')

const SRC = resolve(__dirname, '..', '@ui-kit')
const EXAMPLE = resolve(__dirname, '..', 'example')

module.exports = {
  entry: './@ui-kit',
  output: {
    filename: 'bundle.js',
    path: EXAMPLE
  }
};