module.exports = {
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
