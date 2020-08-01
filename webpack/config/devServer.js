require('dotenv').config();

module.exports = {
  port: 3000,
  liveReload: true,
  writeToDisk: true,
  contentBase: './dist',
  historyApiFallback: {
    index: `./views/${process.env.PROJECT_NAME}-index.html`
  },
  index: `./views/${process.env.PROJECT_NAME}-index.html`
};
