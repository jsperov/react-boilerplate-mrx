const { resolve } = require('path');

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
    extensions: ['.js', '.json', '.ts', '.jsx', '.tsx']
  },
  module: {
    rules : [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: [
                '@babel/preset-env'
              ]
          }
        }
      }
    ]
  },
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: EXAMPLE,
    clientLogLevel: 'error',
    stats: 'minimal'
  }
};