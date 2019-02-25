export interface SVGPart {
  module: {
    rules: [
      {
      test: RegExp,
      use: string[],
      }
    ],
  };
}
