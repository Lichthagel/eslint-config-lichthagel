# eslint-config-lichthagel

Collection of eslint configs I use for my projects.

## Installation

`npm|yarn|pnpm i -D eslint lichthagel/eslint-config-lichthagel`

This config brings along its own plugins using `@rushstack/eslint-patch`.

## Configurations

### Base

Basic rules for any JavaScript project. You should prefer using "basic".

```json
{
  "extends": ["lichthagel/base"]
}
```

### Basic

Basic rules for any JavaScript project. Base + `eslint-plugin-import`.

```json
{
  "extends": ["lichthagel"]
}
```

### Typescript

Already includes "basic".

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

### Node

```json
{
  "extends": ["lichthagel/node"]
}
```

### React

```json
{
  "extends": ["lichthagel/react"]
}
```
