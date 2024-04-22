import stylistic from "@stylistic/eslint-plugin";

import { FlatConfigItemStrict } from "../types";

export default [
  {
    name: "stylistic/custom",
    ...stylistic.configs.customize({
      arrowParens: true,
      braceStyle: "1tbs",
      flat: true,
      indent: 2,
      jsx: true,
      quoteProps: "consistent-as-needed",
      quotes: "double",
      semi: true,
    }),
  },
  {
    name: "lichthagel/stylistic",
    rules: {
      "@stylistic/operator-linebreak": ["error", "after"],
    },
  },
] satisfies FlatConfigItemStrict[] as FlatConfigItemStrict[];
