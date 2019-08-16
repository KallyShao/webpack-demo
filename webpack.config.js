const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
      index: path.resolve(__dirname, './src/index.js'),
      login: path.resolve(__dirname, './src/login.js')
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'index-custom-template',
        template: path.resolve(__dirname, './src/index.html'),
        chunks: ['index']
    })
  ]
}