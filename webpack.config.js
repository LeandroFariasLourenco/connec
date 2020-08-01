const commonConfig = require('./webpack');

module.exports = {
  entry: commonConfig.entry,
  output: commonConfig.output,
  devServer: commonConfig.devServer,
  plugins: commonConfig.plugins,
  resolve: commonConfig.resolve,
  module: commonConfig.modules,
  optimization: commonConfig.optimization,
  performance: commonConfig.performance
};
