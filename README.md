# eslint-config-lichthagel

Collection of eslint configs I use for my projects.

## Installation

`npm|yarn|pnpm i -D eslint lichthagel/eslint-config-lichthagel`

This config brings along its own plugins using `@rushstack/eslint-patch`.

## Configurations

### base

Basic rules for any javascript project

```json
{
  "extends": ["lichthagel"]
}
```

### node

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
    "parser": "@typescript-eslint/parser",,
    "parserOptions": {
        "tsconfigRootDir": ".",
        "project": ["./tsconfig.json"]
    }
}
```

### react

```json
{
  "extends": ["lichthagel/react"]
}
```
