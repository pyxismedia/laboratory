
export const extensions = ({ extensions }: { extensions?: string[] } = { extensions: ['.js'] }) => ({
  resolve: {
    extensions,
  },
});
