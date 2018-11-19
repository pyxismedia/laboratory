import CleanWebpackPlugin from 'clean-webpack-plugin';

export class CleanModel {
  constructor(
    public plugins: Array<CleanWebpackPlugin>,
  ) {}
}
