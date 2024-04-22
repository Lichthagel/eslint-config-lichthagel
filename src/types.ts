import type { Linter } from "eslint";
import type { RuleOptions } from "./typegen";

export type Rules = RuleOptions;

export type FlatConfigItem = Linter.FlatConfig<Linter.RulesRecord & Rules>;

export type FlatConfigItemStrict = Omit<Linter.FlatConfig, "rules"> & {
  /**
   * An object containing the configured rules. When files or ignores are specified,
   * these rule configurations are only available to the matching files.
   */
  rules?: Partial<Rules>;
};

export type OptionsConfig = {
  /**
   * Enable browser-specific rules.
   *
   * @default false
   */
  browser?: boolean;

  /**
   * Enable Node.js-specific rules.
   *
   * @default false
   */
  node?: boolean;

  /**
   * Enable React-specific rules.
   *
   * @default false
   */
  react?: boolean;

  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic?: boolean;

  /**
   * Enable TypeScript-specific rules.
   *
   * @default true
   */
  typescript?: boolean;
};
