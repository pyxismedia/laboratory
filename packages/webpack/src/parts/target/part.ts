export type Target = 'web' | 'webworker' | 'async-node' | 'node' | 'electron-main' | 'electron-renderer' | 'node-webkit';

export const target = ({ target = 'node'}: { target?: Target } = {}) => ({
  target,
});
