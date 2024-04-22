import { ESLint } from "eslint";
import globals from "globals";
import { FlatConfigItem } from "src/types";

const react = async (): Promise<FlatConfigItem[]> => {
  const pluginReact = await import("eslint-plugin-react").then((mod) => mod.default as ESLint.Plugin);
  const pluginReactHooks = await import("eslint-plugin-react-hooks").then((mod) => mod.default as ESLint.Plugin);

  return [
    {
      name: "react/recommended",
      ...(pluginReact.configs as Record<string, FlatConfigItem[]>).recommended,
      plugins: { react: pluginReact },
    },
    {
      name: "react-hooks/recommended",
      ...(pluginReactHooks.configs as Record<string, FlatConfigItem[]>).recommended,
      plugins: { "react-hooks": pluginReactHooks },
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
};

export default react;
