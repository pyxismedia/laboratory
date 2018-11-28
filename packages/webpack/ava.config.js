export default {
  require: [
    './register.js'
  ],
  files: [
    'src/**/spec.ts',
  ],
  sources: [
    'src/**/*.ts',
  ],
  babel: {
    extensions: ['ts'],
    testOptions: {
      babelrc: true,
    },
  },
};
