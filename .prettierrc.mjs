/** @type {import("prettier").Config} */
export default {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: false,
  singleQuote: true,
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 90,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/', '^../', '^./'],
  importOrderSortSpecifiers: true,
  singleAttributePerLine: true,
}
