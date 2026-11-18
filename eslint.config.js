import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2022,
        document: true,
        window: true,
        localStorage: true,
        indexedDB: true,
        ExcelJS: true,
        supabase: true,
        navigator: true,
        URL: true,
        Blob: true,
        FileReader: true,
        console: true,
        setTimeout: true,
        clearTimeout: true,
        MutationObserver: true,
        getComputedStyle: true,
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      eqeqeq: ["error", "always"],
      curly: "error",
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      indent: ["error", 2],
      "no-multiple-empty-lines": ["error", { max: 2 }],
      "no-restricted-globals": ["error", "event"],
    },
  },
  {
    files: ["src/**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
        describe: true,
        test: true,
        expect: true,
        it: true,
        vi: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
      },
    },
  },
  {
    ignores: ["node_modules/", "dist/", "*.min.js", "*.html", "*.css", "package-lock.json"],
  },
];
