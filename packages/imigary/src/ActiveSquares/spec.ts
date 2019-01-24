import ava, { Assertions } from 'ava';
import { SquaresAbstract } from '../Squares/SquaresAbstract';
import { Square } from '../Squares/types';
import { Dimension } from '../Dimension/Dimension';
import prequire from 'proxyquire';

const { assign, defineProperty } = Object;

function memoize(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = assign({}, descriptor);

  defineProperty(descriptor, 'get', {
    get() {
      return function() {
        return original;
      }
    }
  });
}

const { ActiveSquares } = prequire.noCallThru()('./ActiveSquares', {
  '@pyxis/decorators/build/memoize': { memoize }
});

class Squares extends SquaresAbstract {
  public squares!: Square[]; 
  public sizes!: Square[];
  public edges: Square[] = [[[0,2], [1,3]]];

  protected get xPairsEdges() {
    return [[1,2]];
  };
  protected get yPairsEdges() {
    return [[1,2]];
  };

  public get safeArea(): Square  {
    return [[0, 2], [3, 4]];
  }
}

ava('should provide inactive', (t: Assertions) => {
  const expected = [false];
  const dimension = new Dimension(2, 2);
  const activeSquares = new ActiveSquares(dimension, [[1,2], [2,3]]);
  console.log(activeSquares.inactive);
  t.deepEqual(activeSquares.inactive, expected);
});