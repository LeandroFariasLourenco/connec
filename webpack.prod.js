const { merge } = require('webpack-merge');
const config = require('./webpack/config');

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: require('path').resolve('./dist'),
    filename: `./js/${process.env.PROJECT_NAME}-index.js`,
    chunkFilename: `./js/${process.env.PROJECT_NAME}-vendor.js`,
    publicPath: '/'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
});
