import js from "@eslint/js";
import { Linter } from "eslint";
// import promisePlugin from "eslint-plugin-promise";
import stylistic from "@stylistic/eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import unicornPlugin from "eslint-plugin-unicorn";

export default [
  { name: "js/recommended", ...js.configs.recommended },
  // promisePlugin.configs.recommended,
  {
    name: "unicorn/flat/recommended",
    ...unicornPlugin.configs["flat/recommended"],
  },
  {
    name: "stylistic/custom",
    ...stylistic.configs.customize({
      indent: 2,
      quotes: "double",
      quoteProps: "consistent-as-needed",
      semi: true,
      jsx: true,
    }),
  },
  { name: "prettier", ...prettierConfig },
  {
    name: "lichthagel/base",
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "array-callback-return": "warn",
      "no-await-in-loop": "warn",
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
      "no-var": "error",
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
      "require-await": "warn",
      "yoda": "warn",

      // "promise/prefer-await-to-then": "warn",

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
  },
] satisfies Linter.FlatConfig[] as Linter.FlatConfig[];
