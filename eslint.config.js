// @ts-check
import path from "node:path";
import url from "node:url";
import ts from "typescript-eslint";
import node from "./dist/node.js";
import typescript from "./dist/typescript.js";

export default [
  ...typescript,
  ...node,
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
    ignores: ["dist/**/*"],
  },
];
