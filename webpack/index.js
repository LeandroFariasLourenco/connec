const alias = require('./config/alias');
const devServer = require('./config/devServer');
const entry = require('./config/entry');
const modules = require('./config/modules');
const output = require('./config/output');
const plugins = require('./config/plugins');
const resolve = require('./config/resolve');
const rules = require('./config/rules');
const optimization = require('./config/optimization');
const performance = require('./config/performance');

module.exports = {
  alias,
  devServer,
  entry,
  modules,
  output,
  plugins,
  resolve,
  rules,
  optimization,
  performance
};
