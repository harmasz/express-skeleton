module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    jest: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
