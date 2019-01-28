export default {
  compileEnhancements: false,
  extensions: [
    'ts',
  ],
  require: [
    'ts-node/register',
  ],
  files: [
    'app/**/spec.ts',
  ],
  sources: [
    '**/*.{ts,tsx}',
  ],
};
