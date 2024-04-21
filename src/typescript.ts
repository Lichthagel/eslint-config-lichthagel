import { Linter } from "eslint";
// import importPlugin from "eslint-plugin-import";
import ts from "typescript-eslint";
import index from "./index.js";

export default [
  ...index,
  ...(ts.configs.recommendedTypeChecked as Linter.FlatConfig[]),
  // importPlugin.configs.typescript,
  {
    name: "lichthagel/typescript",
    rules: {
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-indexed-object-style": "warn",
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        { assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/default-param-last": "warn",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/method-signature-style": "warn",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-duplicate-imports": "error",
      "default-param-last": "off",
      "no-duplicate-imports": "off",

      // "import/no-unresolved": "off",
    },
  },
  {
    name: "lichthagel/typescript/declarations",
    files: ["*.d.ts"],
    rules: {
      "@stylistic/spaced-comment": "off",
    },
  },
] satisfies Linter.FlatConfig[] as Linter.FlatConfig[];
