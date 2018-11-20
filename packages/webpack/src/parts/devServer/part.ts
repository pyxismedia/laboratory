import { Configuration } from 'webpack-dev-server';

export const devServer = ({ host = '0.0.0.0', port = 3000 } = {}): { devServer: Configuration } => ({
  devServer: {
    host,
    port,
    stats: 'errors-only',
    open: true,
    overlay: true,
  },
});
