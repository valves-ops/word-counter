module.exports = {
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
