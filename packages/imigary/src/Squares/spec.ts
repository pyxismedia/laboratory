import ava from 'ava';
import { DimensionAbstract } from '../Dimension/DimensionAbstract';
import { DerivatedDivisionPairs } from '../Division/types';
import prequire from 'proxyquire';

const { Squares } = prequire.noCallThru()('./Squares', {
  '@pyxis/decorators/build/memoize': { memoize: () => {} },
});

const createDimension = (xPairs: DerivatedDivisionPairs, yPairs: DerivatedDivisionPairs) => class Dimension extends DimensionAbstract {
  public xPairs: DerivatedDivisionPairs = xPairs;
  public yPairs: DerivatedDivisionPairs = yPairs;
  protected readonly width = 10;
  protected readonly height = 10;
  xDivisions = [10];
  yDivisions = [10];
}

ava('should provide squares', (t) => {
  const expected = [
    [[0,2],[0,3],[1,2],[1,3]],
  ];
  const Dimension = createDimension([[0,1], [1,2]], [[2,3], [5,8]]);
  const squares = new Squares(new Dimension());
  t.deepEqual(squares.squares, expected);
});

ava('should provide sizes', (t) => {
  const expected = [
    [[0,2],[1,1]],
  ];
  const Dimension = createDimension([[0,1], [1,2]], [[2,3], [5,8]]);
  const squares = new Squares(new Dimension());
  t.deepEqual(squares.sizes, expected);
});

// TODO
// ava('should provide safeArea', (t) => {
//   const expected = [[0,1]];
//   const xPairs = [];
//   const yPairs = [];
//   const random = () => Math.floor(Math.random() * Math.floor(10));
//   for (let i = 0; i <= 100; i++) {
//     xPairs.push([random(), random()]);
//     yPairs.push([random(), random()]);
//   }
//   const Dimension = createDimension(xPairs, yPairs);
//   const squares = new Squares(new Dimension());
//   t.deepEqual(squares.safeArea, [[xPairs[SafeArea.MIN][0], yPairs[SafeArea.MIN][0]], [xPairs[SafeArea.MAX][0], yPairs[SafeArea.MAX][0]]]);
// });