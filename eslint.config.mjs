export default [
  {
    files: ['./src/**/*.astro'],
    parser: 'astro-eslint-parser',
    extends: 'plugin:astro/recommended',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtensions: ['.astro']
    }
  }
];
