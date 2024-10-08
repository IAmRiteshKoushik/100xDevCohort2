import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: ["**/dist", "**/.eslintrc.cjs", "**/vite.config.ts", "eslint.config.mjs"],
}, ...fixupConfigRules(compat.extends(
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:react-hooks/recommended",
  "airbnb",
  "airbnb/hooks",
)), {
  plugins: {
    "react-refresh": reactRefresh,
  },

  languageOptions: {
    globals: {
      ...globals.browser,
    },

    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "module",

    parserOptions: {
      project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: "/home/rk/ws/dev/100xDevCohort2/week-26-2/2-react-lint",
    },
  },

  rules: {
    "react/jsx-filename-extension": [1, {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }],

    "react-refresh/only-export-components": ["warn", {
      allowConstantExport: true,
    }],
  },
}];
