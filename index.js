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
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "warn",
    "import/no-duplicates": "warn",
  },
};
