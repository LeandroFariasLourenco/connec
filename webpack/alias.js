const path = require('path');

module.exports = {
  '@Components': path.resolve(__dirname, '../', 'src', 'js', 'components'),
  '@Images': path.resolve(__dirname, '../', 'src', 'utils', 'images'),
  '@Icons': path.resolve(__dirname, '../', 'src', 'utils', 'icons'),
  '@Routes': path.resolve(__dirname, '../', 'src', 'js', 'routes'),
  '@Global': path.resolve(__dirname, '..', 'src', 'js', 'global'),
  '@Svgs': path.resolve(__dirname, '..', 'src', 'utils', 'svgs')
};
