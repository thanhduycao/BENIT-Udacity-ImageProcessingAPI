module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  },
  ignorePatterns: ['!build', 'build/*', '!build/test.js']
}
