import * as configs from "./configs";
import { FlatConfigItemStrict, OptionsConfig } from "./types";

const lichthagel = async (
  options: OptionsConfig = {},
): Promise<FlatConfigItemStrict[]> => {
  const {
    browser = false,
    node = false,
    react = false,
    stylistic = true,
    typescript = true,
  } = options;

  const config: FlatConfigItemStrict[] = [...configs.javascript, ...configs.unicorn];

  if (stylistic) {
    config.push(...configs.stylistic);
  }

  if (browser) {
    config.push(...configs.browser);
  }

  if (node) {
    config.push(...configs.node);
  }

  if (typescript) {
    config.push(...configs.typescript);
  }

  if (react) {
    config.push(...(await configs.react()));
  }

  return config;
};

export default lichthagel;
