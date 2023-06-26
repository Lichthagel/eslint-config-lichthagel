require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["import"],
  extends: ["./base.js", "plugin:import/recommended"],
  rules: {
    "import/no-named-as-default": "off",
  },
};
