import { Host, Port, DecorateArgs, DecoratePart } from './types';

export const devServer = ({ host = Host.ALL_ACCESS, port = Port.NODE }: DecorateArgs): DecoratePart => ({
  devServer: {
    host,
    port,
    stats: 'errors-only',
    open: true,
    overlay: true,
  },
});
