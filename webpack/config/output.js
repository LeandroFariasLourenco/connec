const PATH = require('path');
require('dotenv').config();

module.exports = {
  path: PATH.resolve('./dist'),
  filename: `./js/${process.env.PROJECT_NAME}-index.js`,
  chunkFilename: `./js/${process.env.PROJECT_NAME}-vendor.js`,
  publicPath: '/'
};
