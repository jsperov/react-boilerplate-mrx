const { resolve } = require('path');

const SRC = resolve(__dirname, 'ui-kit');
const DIST = resolve(__dirname, 'dist');


module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: DIST
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.jsx', '.tsx'],
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@consts': resolve(__dirname, './src/consts'),
      '@pages': resolve(__dirname, './src/pages'),
      '@services': resolve(__dirname, './src/services'),
      '@theme': resolve(__dirname, './src/theme'),
    }
  },
  module: {
    rules : [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `images/[name].[ext]`,
            }
          }
        ]
      },
    ]
  },
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: DIST,
    clientLogLevel: 'error',
    stats: 'minimal'
  }
};