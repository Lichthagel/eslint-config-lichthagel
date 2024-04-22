import { browser, javascript, node, react, stylistic, typescript, unicorn } from "./configs";
import { FlatConfigItemStrict } from "./types";

const lichthagel = async (
  options: {
    browser?: boolean;
    node?: boolean;
    react?: boolean;
    typescript?: boolean;
  },
): Promise<FlatConfigItemStrict[]> => {
  const configs: FlatConfigItemStrict[] = [...javascript, ...stylistic, ...unicorn];

  if (options.browser) {
    configs.push(...browser);
  }

  if (options.node) {
    configs.push(...node);
  }

  if (options.typescript) {
    configs.push(...typescript);
  }

  if (options.react) {
    configs.push(...(await react()));
  }

  return configs;
};

export default lichthagel;
