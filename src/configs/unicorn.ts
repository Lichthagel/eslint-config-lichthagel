import { Linter } from "eslint";
import unicornPlugin from "eslint-plugin-unicorn";

export default [
  {
    name: "unicorn/flat/recommended",
    ...unicornPlugin.configs["flat/recommended"],
  },
  {
    name: "lichthagel/unicorn",
    rules: {
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
