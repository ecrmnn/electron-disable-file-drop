module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'script',
  },
  plugins: [
    'import',
  ],
  rules: {
    'curly': 'error',
    'newline-before-return': 'error',
    'no-console': 'error',
    'no-ternary': 'error',
  },
};
