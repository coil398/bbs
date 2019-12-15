module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'prettier',
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    "max-len": {
      "code": 100,
      "tabWidth": 2
    },
    "semi": "off",
    "require-jsdoc": "off"
  },
};
