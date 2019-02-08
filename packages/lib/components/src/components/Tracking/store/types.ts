import { Coordinates, DimensionAbstract, SquaresAbstract } from '@pyxis/imigary/build';
import { IActiveSquares } from '@pyxis/imigary/src/ActiveSquares/types';

export enum StoreState {
  PENDING = 'pending',
  DONE = 'done',
  ERROR = 'error',
}

export interface IStore {
  state: StoreState;
  image: HTMLImageElement;
  corners: Coordinates[];
  dimension: DimensionAbstract;
  squares: IActiveSquares;
  width: number;
  height: number;
  title: {
    height: number,
    width: number,
  }
  setImage(image: HTMLImageElement): void;
  setTitle(width: number, height: number): void;
}