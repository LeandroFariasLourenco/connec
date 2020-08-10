require('dotenv').config();

module.exports = {
  port: 3000,
  liveReload: true,
  writeToDisk: true,
  contentBase: './dist',
  historyApiFallback: {
    index: `./views/${process.env.PROJECT_NAME}-index.html`
  },
  index: `./views/${process.env.PROJECT_NAME}-index.html`,
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
};
