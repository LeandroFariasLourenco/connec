const { merge } = require('webpack-merge');
const config = require('./webpack/config');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: '/'
  },
  devServer: {
    port: process.env.PORT,
    liveReload: true,
    contentBase: './dist',
    historyApiFallback: {
      index: '/'
    },
    index: './index.html',
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false
    }
  }
});
