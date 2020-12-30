const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb', // [eslint-config-airbnb]
    'airbnb/hooks', // [eslint-config-airbnb/hooks]
    'prettier', // [eslint-config-prettier]
    'prettier/react', // [eslint-config-prettier/react]
    'eslint:recommended', // [eslint]
    'plugin:react/recommended', // [eslint-plugin-react, eslint-plugin-react-hooks, eslint-config-react-app ...]
    'plugin:@typescript-eslint/recommended', // [typescript eslint rules..]
    'prettier/@typescript-eslint', // [eslint-plugin-prettier, prettier, prettier-eslint, eslint-config-prettier]
    'plugin:prettier/recommended', // [typescript eslint rules..]
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/jsx-fragments': [2, 'element'],
    'prettier/prettier': ['error', prettierOptions], // Enhance prettier with custom options
    '@typescript-eslint/no-var-requires': 'off', // Disable this rule to make require ES5 imports
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }], // Only use jsx inside .tsx files
    'import/prefer-default-export': 'off', // Don't warn for single export from a module
    'react/prop-types': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    /* Use import/extensions workaround to import files with .ts/.tsx extensions
    Issue here: https://github.com/benmosher/eslint-plugin-import/issues/1615 */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order:
            'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
}
