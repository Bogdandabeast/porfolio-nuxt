import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    typescript: true,
    vue: true,
    nuxt: true,
    prettier: true,
    node: false,
    browser: true,
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-alert': 'error',
    },
    extends: ['plugin:prettier/recommended'],
  }),
)
