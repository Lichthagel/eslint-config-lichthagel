/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      { assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-exports": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/default-param-last": "warn",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/quotes": ["warn", "double"],
    "default-param-last": "off",
    "no-array-constructor": "off",
    "no-duplicate-imports": "off",
    "no-unused-vars": "off",
    "quotes": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "import/no-unresolved": "off",
  },
};
