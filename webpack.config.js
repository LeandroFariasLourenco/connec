const commonConfig = require('./webpack');

module.exports = {
  entry: `${process.env.SRC}js/${process.env.PROJECT_NAME}-index.js`,
  output: commonConfig.output,
  devServer: commonConfig.devServer,
  plugins: commonConfig.plugins,
  resolve: commonConfig.resolve,
  module: {
    rules: commonConfig.rules
  },
  optimization: commonConfig.optimization,
  performance: commonConfig.performance
};
