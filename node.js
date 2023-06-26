/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:n/recommended-module"],
  env: {
    node: true,
  },
  rules: {
    "n/no-new-require": "warn",
    "n/no-path-concat": "warn",
    "n/no-process-env": "warn",
    "n/no-sync": "warn",
    "n/prefer-global/buffer": "warn",
    "n/prefer-global/console": "warn",
    "n/prefer-global/process": "warn",
    "n/prefer-global/text-decoder": "warn",
    "n/prefer-global/text-encoder": "warn",
    "n/prefer-global/url": "warn",
    "n/prefer-global/url-search-params": "warn",
    "n/prefer-promises/dns": "warn",
    "n/prefer-promises/fs": "warn",

    "n/no-missing-import": "off",
    "n/no-missing-require": "off",
  },
  settings: {
    "import/resolver": {
      node: true,
    },
  },
};
