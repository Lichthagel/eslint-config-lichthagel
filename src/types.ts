import { Linter } from "eslint";
import { RuleOptions } from "./typegen";

export type Rules = RuleOptions;

export { type ConfigNames } from "./typegen";

export type FlatConfigItem = Linter.FlatConfig<Linter.RulesRecord & Rules>;

export type FlatConfig = FlatConfigItem | FlatConfigItem[];
