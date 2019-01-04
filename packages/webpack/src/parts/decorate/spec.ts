import ava from 'ava';
import prequire from 'proxyquire';

const { decorate } = prequire.noCallThru()('./part', {
  path: { join: (...args: string[]) => [...args] },
  '../../constants': { resolve: (modules: string) => modules },
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
            loader: ['@pyxis', 'loaders', 'loader'],
          },
        ],
      }],
    },
  };

  t.deepEqual(expected, decorate({ test: /.*\.decorable\.ts/, loader: 'loader', options: { some: 'some' } }));
});
