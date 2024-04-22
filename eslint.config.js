// @ts-check
import path from "node:path";
import url from "node:url";
import ts from "typescript-eslint";
import lichthagel from "./dist/index.js";

export default [
  ...lichthagel({
    node: true,
    typescript: true,
  }),
  {
    rules: {
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: path.dirname(url.fileURLToPath(import.meta.url)),
      },
    },
  },
  {
    files: ["eslint.config.js"],
    ...ts.configs.disableTypeChecked,
  },
  {
    files: ["src/typegen.d.ts"],
    rules: {
      "unicorn/no-abusive-eslint-disable": "off",
    },
  },
  {
    ignores: ["dist/**/*"],
  },
];
