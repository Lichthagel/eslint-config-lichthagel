// @ts-check

import index from "./dist/index.js";
import node from "./dist/node.js";

/** @type import("eslint").Linter.FlatConfig[] */
export default [...index, ...node, { ignores: ["dist"] }];
