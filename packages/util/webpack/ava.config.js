export default {
  compileEnhancements: false,
  extensions: [
    "ts"
  ],
  files: [
    'src/**/spec.ts',
  ],
  sources: [
    'src/**/*.ts',
  ],
  require: [
    'ts-node/register'
  ]
};
