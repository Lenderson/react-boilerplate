module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'comma-dangle': [ 'error', 'only-multiline' ],
    'import/extensions': 'off',
    'import/prefer-default-export': 0,
    'prefer-const': 'error',
    'newline-before-return': 'error',
    'max-len': [ 'error', {
      code: 100,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignorePattern: '^import\\W.*',
    }],
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'eol-last': [ 'error', 'always' ],
    'import/no-cycle': [ 2, { maxDepth: 1 }],
    semi: [ 'error', 'never' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', {
      multiline: true,
      consistent: true,
      minProperties: 4,
    }],
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'no-param-reassign': [ 'error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
        'acc',
        'e',
      ],
    }],
    'no-underscore-dangle': [ 'error', { allow: [ '_uid' ] }],
  },
};
