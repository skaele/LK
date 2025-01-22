module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 120,
    tabWidth: 4,
    semi: false,
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrderGroupNamespaceSpecifiers: true,
    importOrderParserPlugins: ["typescript", "jsx"],
    importOrderSortSpecifiers: true,
    importOrderSeparation: true,
    importOrder: [
      "^react",
      "<THIRD_PARTY_MODULES>",
      "^@bigmotion/",
      "^@(.*).css$",
      "^~/app(.*)$",
      "^~/pages(.*)$",
      "^~/layouts(.*)$",
      "^~/widgets(.*)$",
      "^~/features(.*)$",
      "^~/entities(.*)$",
      "^~/shared(.*)$",
      "^[./]"
    ]
}
