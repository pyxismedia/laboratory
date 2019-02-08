module.exports = (wallaby) => ({
  files: [
    'src/**/*',
    '!src/**/spec.ts',
  ],
  tests: ['src/**/spec.ts'],
  testFramework: 'ava',
  compilers: {
    '**/*.ts?(x)': wallaby.compilers.typeScript({
      module: 'commonjs',
      jsx: 'React',
    })
  },
  env: {
    type: 'node',
    runner: 'node',
  },
  debug: true,
});