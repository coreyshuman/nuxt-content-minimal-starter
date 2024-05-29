/** @type {import("prettier").Config} */
const config = {
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  overrides: [
    {
      files: "*.vue",
      options: {
        singleQuote: true
      }
    }
  ]
};

export default config;
