import ava from 'ava';
import { Division } from './Division';

ava('should provide divisions', (t) => {
  const expected = [1,2,3,4,7,10,13,16,18,19,20];
  const division = new Division(20);
  t.deepEqual(division.scale, expected, 'message');
});

ava('should generate pairs', (t) => {
  const expected = [[1,2],[2,3],[3,4],[4,7],[7,13],[13,16],[16,18],[18,19]];
  const pairs = Division.pairs([1,2,3,4,7,13,16,18,19]);
  t.deepEqual(pairs, expected, 'message');
});

ava('should provide scale', (t) => {
  const expected = [0,1,2,3,5,7,8,9,10];
  const division = new Division(10);
  t.deepEqual(division.scale, expected);
});
