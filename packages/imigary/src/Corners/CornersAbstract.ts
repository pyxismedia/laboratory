import { Coordinates } from '../Squares/types';
import { ICorners } from './types';
export abstract class CornerAbstract implements ICorners {
  public abstract rectFromPairs(pairs: Coordinates[]): void;
  public abstract style(styles: string[][]): void;
  public abstract fill(): void;
}