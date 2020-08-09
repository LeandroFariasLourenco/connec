module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true
      }
    ],
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@Components': './src/js/components',
        '@Images': './src/images',
        '@Icons': './src/icons',
        '@Routes': './src/js/routes',
        '@Global': './src/js/global',
        '@Svgs': './src/icons/svgs',
        '@Pages': './src/js/pages',
        '@Styles': './src/js/styles',
        '@Utils': './src/js/utils',
        '@App': './src/app',
        '@Store': './src/js/store'
      }
    }]
  ]
};
