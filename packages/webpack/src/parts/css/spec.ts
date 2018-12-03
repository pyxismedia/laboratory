import ava from 'ava';
import prequire from "proxyquire";

const { css } = prequire.noCallThru()('./part', {
  '../../constants': { PACKAGE_DIRNAME: 'root' },
  join: (...args: string[]) => ([...args])
});

ava('should return default configuration', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
  };

  const result = css();

  t.deepEqual(result, expected);
});
