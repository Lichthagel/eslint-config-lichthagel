require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./base.js"],
  plugins: ["import"],
  rules: {
    // analysis/correctness
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",

    // red flags (thus, warnings)
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "off",
    "import/no-duplicates": "warn",
  },
};
