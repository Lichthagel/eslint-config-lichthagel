import unicornPlugin from "eslint-plugin-unicorn";
import { FlatConfigItem } from "src/types";

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
] satisfies FlatConfigItem[] as FlatConfigItem[];
