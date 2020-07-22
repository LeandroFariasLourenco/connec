const PATH = require('path');

module.exports = {
  '@Components': PATH.resolve('./', 'src', 'js', 'components'),
  '@Images': PATH.resolve('./', 'src', 'utils', 'images'),
  '@Icons': PATH.resolve('./', 'src', 'utils', 'icons'),
  '@Routes': PATH.resolve('./', 'src', 'js', 'routes'),
  '@Global': PATH.resolve('./', 'src', 'js', 'global'),
  '@Svgs': PATH.resolve('./', 'src', 'utils', 'svgs'),
  '@Pages': PATH.resolve('./', 'src', 'js', 'pages')
};
