# eslint-config-lichthagel

Collection of eslint configs I use for my projects.

## Installation

`npm|yarn|pnpm i -D eslint lichthagel/eslint-config-lichthagel`

## Configurations

### base

Basic rules for any javascript project

```json
{
    "extends": ["lichthagel"]
}
```

### node

Supports node globals. Extends base.

```json
{
    "extends": ["lichthagel/node"]
}
```

### typescript

`npm|yarn|pnpm i -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser`

```json
{
    "extends": ["lichthagel/typescript"],
    "parser": "@typescript-eslint/parser", // otherwise the VSCode-Extension will complain
    "parserOptions": {
        "tsconfigRootDir": ".",
        "project": ["./tsconfig.json"]
    }
}
```

### react

`npm|yarn|pnpm i -D eslint-plugin-react eslint-plugin-react-hooks`

```json
{
    "extends": ["lichthagel/react"]
}
```