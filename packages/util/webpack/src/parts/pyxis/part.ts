
export const pyxis = () => ({
  watchOptions: {
    ignored: [
      /node_modules([\\]+|\/)+(?!@pyxis)/, 
      /\@pyxis([\\]+|\/)node_modules/
    ],
  },
});
