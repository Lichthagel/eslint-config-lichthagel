import perfectionstNatural from "eslint-plugin-perfectionist/configs/recommended-natural";

import { FlatConfigItemStrict } from "../types";

export default [
  {
    name: "perfectionist/recommended-natural",
    ...perfectionstNatural,
  },
  {
    name: "lichthagel/perfectionist",
    rules: {
      "perfectionist/sort-objects": [
        "error",
        {
          "custom-groups": {
            id: ["id", "name"],
          },
          "groups": ["id", "unknown"],
          "partition-by-comment": true,
          "partition-by-new-line": true,
        },
      ],
    },
  },
] satisfies FlatConfigItemStrict[] as FlatConfigItemStrict[];
