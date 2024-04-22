import globals from "globals";
import { FlatConfigItem } from "src/types";

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
] satisfies FlatConfigItem[] as FlatConfigItem[];
