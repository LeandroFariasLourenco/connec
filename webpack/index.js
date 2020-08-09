require('dotenv').config();

const devServer = require('./config/devServer');
const output = require('./config/output');
const plugins = require('./config/plugins');
const resolve = require('./config/resolve');
const rules = require('./config/rules');
const optimization = require('./config/optimization');
const performance = require('./config/performance');

module.exports = {
  devServer,
  output,
  plugins,
  resolve,
  rules,
  optimization,
  performance
};
