module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  env: {
    development: {
      plugins: [
        ['styled-components', {
          displayName: true
        }]
      ]
    },
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        'transform-react-remove-prop-types',
        ['styled-components', {
          displayName: false
        }]
      ]
    }
  },
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@Components': './src/js/Components',
        '@Images': './src/Images',
        '@Icons': './src/Icons',
        '@Routes': './src/js/Routes',
        '@Global': './src/js/Global',
        '@Pages': './src/js/Pages',
        '@Styles': './src/js/Styles',
        '@Layouts': './src/js/Layouts',
        '@Utils': './src/js/Utils',
        '@Resources': './src/js/Resources',
        '@Store': './src/js/Store',
        '@Requests': './src/js/Requests'
      }
    }]
  ]
};
