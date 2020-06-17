require('dotenv').config();
module.exports = {
  port: 3000,
  liveReload: true,
  writeToDisk: true,
  contentBase: './dist',
  index: `./views/${process.env.PROJECT_NAME}-index.html`
};
