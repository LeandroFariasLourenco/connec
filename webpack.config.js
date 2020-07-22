const commonConfig = require('./webpack');

module.exports = {
  entry: commonConfig.entry,
  watch: commonConfig.watch,
  output: commonConfig.output,
  devServer: commonConfig.devServer,
  plugins: commonConfig.plugins,
  resolve: commonConfig.resolve,
  module: commonConfig.modules
};
