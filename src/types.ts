import type { Linter } from "eslint";
import type { RuleOptions } from "./typegen";

export type Rules = RuleOptions;

export type FlatConfigItem = Linter.FlatConfig<Linter.RulesRecord & Rules>;

export type FlatConfig = FlatConfigItem | FlatConfigItem[];
