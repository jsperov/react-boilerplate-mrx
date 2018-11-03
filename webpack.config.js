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
  module: {
    rules : [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  },
  plugins: [],
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: EXAMPLE,
    clientLogLevel: 'error'
  }
};