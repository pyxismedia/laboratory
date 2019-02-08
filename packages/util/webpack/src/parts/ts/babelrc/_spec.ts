import prequire from 'proxyquire';
import ava from 'ava';

// FIXME: Preshaps conflict with json file
const { babelrc } = prequire.noCallThru()('./babelrc.js', {
  '@babel/preset-env': { default: '@babel/preset-env' },
  '@babel/preset-typescript': { default: '@babel/preset-typescript' },
  '@babel/preset-react': { default: '@babel/preset-react' },
  '@babel/plugin-proposal-class-properties': { default: '@babel/plugin-proposal-class-properties' },
  '@babel/plugin-proposal-object-rest-spread': { default: '@babel/plugin-proposal-object-rest-spread' },
});

ava('should return expected values', (t) => {
  const expected = {
    presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
  };
  console.log('TEST', babelrc);

  t.deepEqual(babelrc, expected);
});
