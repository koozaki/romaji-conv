import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 11,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.commonjs
      }
    },
    rules: {}
  }
];
