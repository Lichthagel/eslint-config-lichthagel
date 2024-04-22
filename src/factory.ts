import { Linter } from "eslint";
import { browser, javascript, node, react, stylistic, typescript, unicorn } from "./configs";

const lichthagel = (options: {
  browser?: boolean;
  node?: boolean;
  react?: boolean;
  typescript?: boolean;
}): Linter.FlatConfig[] => {
  const configs: Linter.FlatConfig[] = [...javascript, ...stylistic, ...unicorn];

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
    configs.push(...react);
  }

  return configs;
};

export default lichthagel;
