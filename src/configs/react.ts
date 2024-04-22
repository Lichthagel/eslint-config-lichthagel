import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import { FlatConfigItem } from "src/types";

export default [
  {
    name: "react/recommended",
    ...reactPlugin.configs.recommended,
    plugins: { react: reactPlugin },
  },
  {
    name: "react-hooks/recommended",
    ...reactHooksPlugin.configs.recommended,
    plugins: { "react-hooks": reactHooksPlugin },
  },
  {
    name: "lichthagel/react",
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "react/destructuring-assignment": "warn",
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/jsx-boolean-value": "warn",
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
      "react/no-array-index-key": "warn",
      "react/no-typos": "warn",
      "react/no-unsafe": "warn",
      // "react/no-unused-prop-types": "warn",
      "react/no-unused-state": "warn",
      "react/prefer-exact-props": "warn",
      "react/react-in-jsx-scope": "off",
      "react/sort-prop-types": "error",
      "react/style-prop-object": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
] satisfies FlatConfigItem[] as FlatConfigItem[];
