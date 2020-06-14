const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROJECT = 'connec';
const SRC = './src/';

module.exports = {
  entry: `${SRC}js/${PROJECT}-index.js`,
  watch: false,
  output: {
    path: path.join(__dirname, './dist'),
    filename: `./js/${PROJECT}-index-bundle.js`
  },
  devServer: {
    port: 3000,
    index: `/views/${PROJECT}-index.html`,
    liveReload: true,
    writeToDisk: true,
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC}views/${PROJECT}-index.pug`,
      filename: `./views/${PROJECT}-index.html`
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader'
        }
      }
    ]
  }
};
