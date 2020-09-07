require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: `${process.env.SRC}js/${process.env.PROJECT_NAME}-index.js`,
  plugins: [
    new HtmlWebpackPlugin({
      template: `./${process.env.SRC}views/${process.env.PROJECT_NAME}-index.pug`,
      filename: `./views/${process.env.PROJECT_NAME}-index.html`
    }),
    new LodashPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader'
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
