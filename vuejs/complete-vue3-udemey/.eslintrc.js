/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable indent */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 0,
    'class-methods-use-this': 0,
    'no-alert': 0,
    'lines-between-class-members': 0,
    'no-console': 0,
    'vue/require-v-for-key': 0,
    'vue/valid-v-for': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
  },
};
