/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./index.js",
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
  },
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      { assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
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

    "import/no-unresolved": "off",
  },
  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "spaced-comment": "off",
      },
    },
  ],
};
