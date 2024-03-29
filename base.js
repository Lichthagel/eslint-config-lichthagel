require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "array-callback-return": "warn",
    "no-await-in-loop": "warn",
    "no-constant-binary-expression": "warn",
    "no-duplicate-imports": "error",
    "no-promise-executor-return": "warn",
    "no-self-compare": "warn",
    "no-unmodified-loop-condition": "warn",
    "arrow-body-style": "warn",
    "default-case-last": "warn",
    "dot-notation": "warn",
    "eqeqeq": "warn",
    "logical-assignment-operators": "warn",
    "no-bitwise": "warn",
    "no-var": "warn",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": [
      "warn",
      { AssignmentExpression: { array: false, object: false } },
    ],
    "prefer-exponentiation-operator": "warn",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "warn",
    "prefer-regex-literals": "warn",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["warn", "consistent-as-needed"],
    "require-await": "warn",
    "spaced-comment": "warn",
    "yoda": "warn",

    "no-tabs": ["error", { allowIndentationTabs: true }],
    "quotes": ["warn", "double"],

    "promise/prefer-await-to-then": "warn",

    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
          camelCase: true,
        },
      },
    ],
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
    "unicorn/prevent-abbreviations": "off",
  },
};
