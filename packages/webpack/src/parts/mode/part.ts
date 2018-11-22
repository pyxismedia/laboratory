export type Mode = 'production' | 'development';

export const mode = ({ mode = 'production' }: { mode?: 'production' | 'development' } = {}) => ({
  mode,
});
