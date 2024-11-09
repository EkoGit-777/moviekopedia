/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@unocss',
  ],
  ignorePatterns: ['*.config.cjs', '**/public/service-worker.js'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prefer-const': 'error',

    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    // always use kebab case for html tag.
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always',
        },
        svg: 'any',
        math: 'any',
      },
    ],
    'vue/require-typed-ref': ['warn'],

    // waiting for @vue/eslint-config-typescript to support @typescript-eslint@v6
    // https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how
    // '@typescript-eslint/consistent-type-exports': 'error',
    // '@typescript-eslint/consistent-type-imports': 'error',
  },
}
