// Module
import { ICorners } from './types';
// Dependencies
import { Coordinates } from '../Squares';
import { CornerAbstract } from './CornersAbstract';

export class Corners extends CornerAbstract implements ICorners {
  constructor(public context: any) {
    super();
  }

  public rectFromPairs(pairs: Coordinates[]) {
    for (let i = 0; i < pairs.length; i++) {
      this.context.rect(pairs[i][0], pairs[i][1], 1, 1);
    }
  }

  public style(styles: string[][]) {
    styles.forEach((data) => { this.context[data[0]] = data[1] });
  }

  public fill() {
    this.context.fill();
  }
}