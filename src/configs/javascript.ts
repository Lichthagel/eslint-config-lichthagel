import js from "@eslint/js";
import globals from "globals";
import { FlatConfigItem } from "src/types";

export default [
  { name: "js/recommended", ...js.configs.recommended },
  {
    name: "lichthagel/javascript",
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        ...globals.es2021,
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
    },
  },
] satisfies FlatConfigItem[] as FlatConfigItem[];
