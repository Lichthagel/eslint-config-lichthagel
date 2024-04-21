import { Linter } from "eslint";
// import importPlugin from "eslint-plugin-import";
import base from "./base.js";

export default [
  ...base,
  {
    name: "lichthagel",
    plugins: {
      // import: importPlugin,
    },
    rules: {
      // "import/no-unresolved": "error",
      // "import/named": "error",
      // "import/namespace": "error",
      // "import/default": "error",
      // "import/export": "error",
      // "import/no-named-as-default": "off",
      // "import/no-named-as-default-member": "warn",
      // "import/no-duplicates": "warn",
    },
  },
] satisfies Linter.FlatConfig[] as Linter.FlatConfig[];
