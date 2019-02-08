import { Coordinates } from '../Squares/types';
export interface ICorners {
  rectFromPairs(pairs: Coordinates[]): void;
  style(styles: string[][]): void;
  fill(): void;
}