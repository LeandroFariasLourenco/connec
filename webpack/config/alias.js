const PATH = require('path');

module.exports = {
  '@Components': PATH.resolve('./', 'src', 'js', 'components'),
  '@Images': PATH.resolve('./', 'src', 'images'),
  '@Icons': PATH.resolve('./', 'src', 'icons'),
  '@Routes': PATH.resolve('./', 'src', 'js', 'routes'),
  '@Global': PATH.resolve('./', 'src', 'js', 'global'),
  '@Svgs': PATH.resolve('./', 'src', 'icons', 'svgs'),
  '@Pages': PATH.resolve('./', 'src', 'js', 'pages'),
  '@Styles': PATH.resolve('./', 'src', 'js', 'styles'),
  '@Utils': PATH.resolve('./', 'src', 'js', 'utils'),
  '@App': PATH.resolve('./', 'src', 'app')
};
