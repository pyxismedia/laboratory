import ava from 'ava';
import prequire from 'proxyquire';

const { decorate } = prequire.noCallThru()('./part', {
  path: { join: (...args: string[]) => [...args] },
  '../../constants': { PACKAGE_DIRNAME: 'root' },
});

ava('should set all variables', (t) => {
  const expected = {
    module: {
      rules: [{
        test: /.*\.decorable\.ts/,
        loaders: [
          {
            options: {
              some: 'some',
            },
            loader: ['root', 'node_modules', '@pyxis', 'loaders', 'loader'],
          },
        ],
      }],
    },
  };

  t.deepEqual(expected, decorate({ test: /.*\.decorable\.ts/, loader: 'loader', options: { some: 'some' } }));
});
