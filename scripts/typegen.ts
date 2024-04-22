import { Linter } from "eslint";
import { concat } from "eslint-flat-config-utils";
import { flatConfigsToRulesDTS } from "eslint-typegen/core";
import { builtinRules } from "eslint/use-at-your-own-risk";
import fs from "node:fs/promises";
import { browser, javascript, node, react, stylistic, typescript, unicorn } from "src/configs";

const config = await concat<Linter.FlatConfig>(
  {
    plugins: {
      "": {
        rules: Object.fromEntries(builtinRules.entries()),
      },
    },
  },
  browser,
  javascript,
  node,
  react,
  stylistic,
  typescript,
  unicorn,
);

const configNames = config.map((c) => c.name).filter(Boolean) as string[];

const dts =
`${await flatConfigsToRulesDTS(config, {
  includeAugmentation: true,
})}
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(" | ")}
`;

await fs.writeFile("src/typegen.d.ts", dts, "utf8");
