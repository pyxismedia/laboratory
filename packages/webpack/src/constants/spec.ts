import ava from 'ava';
import prequire from 'proxyquire';

const { PACKAGE_DIRNAME } = prequire('./constants', {
  'pkg-dir': { sync: (dirname: string) => !!dirname}
});

ava('should return package dir', (t) => {
  t.is(true, PACKAGE_DIRNAME);
});
