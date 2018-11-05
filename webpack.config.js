const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

const SRC = resolve(__dirname, 'ui-kit');
const EXAMPLE = resolve(__dirname, 'example');

module.exports = {
  mode: 'development',
  entry: './ui-kit',
  output: {
    filename: 'bundle.js',
    path: EXAMPLE
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules : [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: [
                '@babel/preset-env'
              ]
          }
        }
      },
      {
        test: '/\.tsx?$/',
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CheckerPlugin()
  ],
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: EXAMPLE,
    clientLogLevel: 'error',
    stats: 'minimal'
  }
};