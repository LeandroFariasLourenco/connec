module.exports = {
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
};
