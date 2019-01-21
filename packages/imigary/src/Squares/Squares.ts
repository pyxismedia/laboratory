import flatten from 'lodash/flatten';
// Module
import { Square, SafeArea } from './types';
import { SquaresAbstract } from './SquaresAbstract';
// Dependencies
import { DerivatedDivisionPairs } from '../Division';
import { DimensionAbstract } from '../Dimension';
import { memoize } from '@pyxis/decorators/build/memoize';

export class Squares extends SquaresAbstract {
  protected static SAFE_MIN: SafeArea = SafeArea.MIN;
  protected static SAFE_MAX: SafeArea = SafeArea.MAX;

  constructor(
    protected readonly dimension: DimensionAbstract,
  ) {
    super();
  }

  @memoize protected get xPairsEdges(): DerivatedDivisionPairs {
    return this.dimension.xPairs.slice(0, -1);
  }

  @memoize protected get yPairsEdges(): DerivatedDivisionPairs {
    return this.dimension.yPairs.slice(0, -1);
  }

  /**
   * @returns Array of coordinates x,y of 4 corners of square
   * @description Coordinates based description of the square on matrix using 4 corners
   */
  @memoize public get squares(): Square[] {
    return flatten(
      this.xPairsEdges.map(
        x => this.yPairsEdges.map(
          y => [[x[0], y[0]], [x[0], y[1]], [x[1], y[0]], [x[1], y[1]]]
        )
      )
    ) as Square[];
  }

  /**
   * @returns Array of left top corner of square with width and height
   * @description Can be constructed square from this using canvas rect on matrix
   */
  @memoize public get sizes(): Square[] {
    const sizes = flatten(
      this.xPairsEdges.map(
        x => this.yPairsEdges.map(
          y => [[x[0], y[0]], [Math.abs(x[0] - x[1]), Math.abs(y[0] - y[1])]]
        )
      )
    ) as Square[];
    return sizes;
  }

  /**
   * @returns Array of left and top edges and right and bottom edges of square
   * @description For checking whether some point is in between these edges on matrix [](./../../src/Squares/Edges.md)
   */
  @memoize public get edges(): Square[] {
    return flatten(
      this.xPairsEdges.map(
        x => this.yPairsEdges.map(
          y => [[x[0], y[0]], [x[1], y[1]]]
        )
      )
    ) as Square[];
  }

  /**
   * @description Safe Area for rendering text
   */
  @memoize public get safeArea(): Square {
    return [this.edges[Squares.SAFE_MIN][0], this.edges[Squares.SAFE_MAX][1]];
  }
}
