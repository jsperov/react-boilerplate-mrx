const { resolve } = require('path')

const SRC = resolve(__dirname, '@ui-kit')
const EXAMPLE = resolve(__dirname, 'example')

module.exports = {
  entry: './@ui-kit/index.js',
  output: {
    filename: 'bundle.js',
    path: EXAMPLE
  },
  module: {
    rules : [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  watch: true,
  devtool: 'source-map'
};