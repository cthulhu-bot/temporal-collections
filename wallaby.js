module.exports = (wallaby) => ({
  files: [
    '__mocks__/**/*.js?(x)',
    'js/**/*.js?(x)',
    '!**/*.test.js?(x)',
    'jest.setup.js',
    'webpack.config.common.js',
    'output.template.ejs',
    { pattern: '.babelrc', instrument: false },
  ],
  tests: ['js/**/*.test.js?(x)'],
  filesWithNoCoverageCalculated: [
    '__mocks__/**/*.js?(x)',
    'jest.setup.js',
    'webpack.config.common.js',
    'output.template.ejs',
    'fixture.js',
  ],
  env: {
    type: 'node',
    runner: 'node',
  },
  compilers: {
    '**/*.js?(x)': wallaby.compilers.babel(),
  },
  testFramework: 'jest',
  debug: true,
})
