import withNuxt from "./.nuxt/eslint.config.mjs";
import * as eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt({
  files: ["**/*.ts", "**/*.js", "**/*.mjs", "**/*.vue"],
  rules: {
    /*
      vue/multi-word-component-names: ["error", {
        ignores: ["default"]
      }]
    */
  }
}).append(eslintPluginPrettierRecommended.default);
