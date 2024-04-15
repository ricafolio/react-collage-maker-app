// @ts-check

import tseslint from "typescript-eslint";

export default tseslint.config({
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
    },
  },
  rules: {
    "react-refresh/only-export-components": "warn",
  },
});
