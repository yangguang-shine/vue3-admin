module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  // "parser": "@typescript-eslint/parser",

  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },

  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    // "@typescript-eslint/no-unused-vars": 'warn',
    "@typescript-eslint/no-explicit-any": "off",
    "no-debugger": "off",
  },
};
