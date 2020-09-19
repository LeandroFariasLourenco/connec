module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'react/jsx-filename-extension': [0],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-console': 'off',
    indent: ['error', 2]
  }
};
