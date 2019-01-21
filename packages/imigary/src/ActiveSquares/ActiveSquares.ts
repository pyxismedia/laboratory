// Module
import { IActiveSquares } from './types';
// Dependencies
import flatten from 'lodash/flatten';
import { Square, Coordinates, Squares } from '../Squares';
import { DimensionAbstract } from '../Dimension';
import { memoize } from '@pyxis/decorators/build/memoize';

/**
 * @description 
 */
export class ActiveSquares extends Squares implements IActiveSquares {
  constructor(
    protected readonly dimension: DimensionAbstract,
    protected readonly corners: Coordinates[],
  ) {
    super(dimension);
  }

  public getInactive = (square: Square) => (pair: Coordinates): boolean => {
    const xMin = square[0][0];
    const yMin = square[0][1];
    const xMax = square[1][0];
    const yMax = square[1][1];

    const xCorner = pair[0];
    const yCorner = pair[1];

    if (xMin <= xCorner && xCorner <= xMax && yMin <= yCorner && yCorner <= yMax) {
      return true;
    }
    return false;
  }

  /**
   * @description generate all inactive squares
   */
  @memoize public get inactive(): boolean[] {
    return flatten(
      this.edges.map(
        square => this.corners.map(
          this.getInactive(square)
        ).includes(true)
      )
    )
  }

  @memoize public get inactiveEdges() {
    return this.sizes.map<Square | undefined>((coordinate, i) => { 
      if (this.inactive[i]) {
        return coordinate;
      }
    }).filter((exist: Square | undefined) => exist !== undefined) as Square[];
  }

  /**
   * @description get all safeArea squares
   */
  @memoize protected get safeAreaSquares(): boolean[] {
    return this.edges.map(
      (square: Square) => { 
        const xMin = square[0][0];
        const yMin = square[0][1];
        const xMax = square[1][0];
        const yMax = square[1][1];

        const xMinSafeArea = this.safeArea[0][0];
        const yMinSafeArea = this.safeArea[0][1];
        const xMaxSafeArea = this.safeArea[1][0];
        const yMaxSafeArea = this.safeArea[1][1];

        return xMinSafeArea <= xMin &&
            yMinSafeArea <= yMin &&
            xMax <= xMaxSafeArea &&
            yMax <= yMaxSafeArea;
      }
    );
  }
  
  /** 
   * @description get all inactive squares in safe area
   */
  @memoize public get safeAreaInactiveSquares(): boolean[] {
    const result = [];
    for (let i = 0; i < this.safeAreaSquares.length; i++) {
      result[i] = this.inactive[i] && this.safeAreaSquares[i];
    }
    return result;
  }

  /**
   * @description get all active squares in safe area
   */
  @memoize public get safeAreaActiveSquares(): boolean[] {
    const result = [];
    for (let i = 0; i < this.safeAreaSquares.length; i++) {
      result[i] = !this.inactive[i] && this.safeAreaSquares[i];
    }
    return result;
  }
}