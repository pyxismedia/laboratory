import { DerivatedDivision, DerivatedDivisionPairs } from '../Division/types';
import { IDimension } from './types';

export abstract class DimensionAbstract implements IDimension {
  protected abstract width: number;
  protected abstract height: number;
  protected abstract get xDivisions(): DerivatedDivision;
  protected abstract get yDivisions(): DerivatedDivision;
  public abstract get xPairs(): DerivatedDivisionPairs;
  public abstract get yPairs(): DerivatedDivisionPairs;
}