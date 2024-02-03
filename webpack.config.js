const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {},
  },
}
