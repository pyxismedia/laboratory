// Module
import { DimensionAbstract } from './DimensionAbstract';
// Dependencies
import { Division } from '../Division';
import { DerivatedDivision, DerivatedDivisionPairs } from '../Division/types';

export class Dimension extends DimensionAbstract {
  constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {
    super();
  }

  protected get xDivisions(): DerivatedDivision {
    const widthSize = new Division(this.width);
    return widthSize.scale; /*?*/
  }

  protected get yDivisions(): DerivatedDivision {
    const heightSize = new Division(this.height);
    return heightSize.scale; /*?*/
  }

  public get xPairs(): DerivatedDivisionPairs {
    return Division.pairs(this.xDivisions); /*?*/
  }

  public get yPairs(): DerivatedDivisionPairs {
    return Division.pairs(this.yDivisions); /*?*/
  }
}
