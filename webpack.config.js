const { resolve } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');


const SRC = resolve(__dirname, 'ui-kit')
const EXAMPLE = resolve(__dirname, 'example')

module.exports = {
  entry: './ui-kit/index.js',
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
  plugin: [
    new CleanWebpackPlugin(['example'])
  ],
  watch: true,
  devtool: 'source-map'
};