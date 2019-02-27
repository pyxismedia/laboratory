import ava from 'ava';
import prequire from 'proxyquire';
import { resolve } from '../../constants';

const { markdown } = prequire.noCallThru()('./part', {
  '../../constants': { resolve: (modules: string) => modules },
});

ava('should return default configuration', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader',
            },
            {
              loader: 'markdown-loader',
            },
          ],
        },
      ],
    },
  };

  const result = markdown();

  t.deepEqual(result, expected);
});
