import root from 'app-root-path';

export const output = ({ filename = '[name].js', path = root.path } = {}) => ({
  output: {
    filename,
    path,
  },
});
