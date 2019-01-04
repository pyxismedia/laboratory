import { DerivatedDivisionPairs } from '../Division/types';
import { Square, ISquares, SafeArea, SafeAreaTuple } from './types';

export abstract class SquaresAbstract implements ISquares {
  protected static SAFE_MIN: SafeArea;
  protected static SAFE_MAX: SafeArea;
  protected abstract get xPairsEdges(): DerivatedDivisionPairs;
  protected abstract get yPairsEdges(): DerivatedDivisionPairs;
  public abstract get squares(): Square[]
  public abstract get sizes(): Square[]
  public abstract get edges(): Square[];
  public abstract get safeArea(): SafeAreaTuple;
}