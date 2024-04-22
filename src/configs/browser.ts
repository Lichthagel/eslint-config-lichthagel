import globals from "globals";

export default [
  {
    name: "lichthagel/browser",
    languageOptions: {
      globals: {
        ...globals.browser,
        document: "readonly",
        navigator: "readonly",
        window: "readonly",
      },
    },
  },
] satisfies import("eslint").Linter.FlatConfig[];
