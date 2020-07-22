const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = [
  new HtmlWebpackPlugin({
    template: `./${process.env.SRC}views/${process.env.PROJECT_NAME}-index.pug`,
    filename: `./views/${process.env.PROJECT_NAME}-index.html`
  })
];
