module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
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
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'svg-url-loader'
      }
    ]
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  }
];
