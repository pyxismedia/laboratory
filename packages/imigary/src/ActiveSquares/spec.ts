import ava, { Assertions } from 'ava';
import { ActiveSquares } from './ActiveSquares';
import { SquaresAbstract } from '../Squares/SquaresAbstract';
import { Square, SafeAreaTuple } from '../Squares/types';

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

  public get safeArea(): SafeAreaTuple  {
    return [[0, 2], [3, 4]];
  }
}

ava('should provide inactive', (t: Assertions) => {
  const expected = [true];
  const squares = new Squares();
  const activeSquares = new ActiveSquares(squares, [[1,2], [2,3]]);
  console.log(activeSquares.inactive);
  t.deepEqual(activeSquares.inactive, expected);
});