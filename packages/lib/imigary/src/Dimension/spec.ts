import ava from 'ava';
import { Dimension } from './Dimension';

ava('should provide xPairs', (t) => {
  const expected = [
    [ 0, 1 ],
    [ 1, 2 ],
    [ 2, 3 ],
    [ 3, 5 ],
    [ 5, 7 ],
    [ 7, 8 ],
    [ 8, 9 ],
    [ 9, 10 ],
  ];
  const dimension  = new Dimension(10, 10);
  t.deepEqual(dimension.xPairs, expected);
});

ava('should provide yPairs', (t) => {
  const expected = [
    [ 0, 1 ],
    [ 1, 2 ],
    [ 2, 3 ],
    [ 3, 5 ],
    [ 5, 7 ],
    [ 7, 8 ],
    [ 8, 9 ],
    [ 9, 10 ],
  ];
  const dimension  = new Dimension(10, 10);
  t.deepEqual(dimension.yPairs, expected);
});