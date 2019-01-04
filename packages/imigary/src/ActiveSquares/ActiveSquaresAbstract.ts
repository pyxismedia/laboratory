// Dependencies
import { Coordinates, Square } from '../Squares/types';
import { SquaresAbstract } from '../Squares';
// Module
import { IActiveSquares } from './types';
import { DimensionAbstract } from '../Dimension';

export abstract class ActiveSquaresAbstract extends SquaresAbstract implements IActiveSquares {
  protected abstract dimension: DimensionAbstract;
  protected abstract corners: Coordinates[];
  protected abstract inactive: boolean[];
  public abstract getInactive: (square: Square) => (pair: Coordinates) => boolean;
  protected abstract generateInactive(): boolean[]
  protected abstract get safeAreaSquares(): boolean[];
  public abstract inactiveEdges: Square[];
  public abstract get safeAreaInactiveSquares(): boolean[];
}