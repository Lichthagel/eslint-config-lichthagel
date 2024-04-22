import stylistic from "@stylistic/eslint-plugin";
import { Linter } from "eslint";

export default [
  {
    name: "stylistic/custom",
    ...stylistic.configs.customize({
      flat: true,
      arrowParens: true,
      braceStyle: "1tbs",
      indent: 2,
      quotes: "double",
      quoteProps: "consistent-as-needed",
      semi: true,
      jsx: true,
    }),
  },
  {
    name: "lichthagel/stylistic",
    rules: {
      "@stylistic/operator-linebreak": ["error", "after"],
    },
  },
] satisfies Linter.FlatConfig[] as Linter.FlatConfig[];
