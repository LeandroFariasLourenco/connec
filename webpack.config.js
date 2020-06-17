const DEVSERVER_CONFIG = require('./webpack/devServer');
const ALIAS_CONFIG = require('./webpack/alias');
const RULES_CONFIG = require('./webpack/rules');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();
const GLOBAL = process.env;

module.exports = {
  entry: `${GLOBAL.SRC}js/${GLOBAL.PROJECT_NAME}-index.js`,
  watch: false,
  output: {
    path: path.join(__dirname, './dist'),
    filename: `./js/${GLOBAL.PROJECT_NAME}-index-bundle.js`
  },
  devServer: DEVSERVER_CONFIG,
  plugins: [
    new HtmlWebpackPlugin({
      template: `${GLOBAL.SRC}views/${GLOBAL.PROJECT_NAME}-index.pug`,
      filename: `./views/${GLOBAL.PROJECT_NAME}-index.html`
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: ALIAS_CONFIG
  },
  module: {
    rules: RULES_CONFIG
  }
};
