const path = require('path');

module.exports = [
  {
    test: /\.js$/,
    exclude: path.resolve(__dirname, '..', 'node_modules'),
    use: ['babel-loader', 'eslint-loader']
  },
  {
    test: /\.pug$/,
    use: {
      loader: 'pug-loader'
    }
  },
  {
    test: /\.(jpg|png)$/,
    use: {
      loader: 'url-loader'
    }
  }
];
