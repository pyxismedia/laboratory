import ava from 'ava';
import prequire from 'proxyquire';

class HtmlWebpackPlugin {
  title: string;

  constructor({ title }: { title: string }) {
    this.title = title;
  }
}

const { html } = prequire('./part', { 'html-webpack-plugin': HtmlWebpackPlugin });

ava('should call HtmlWebpackPlugin with default parameter', (t) => {
  const expected = {
    plugins: [
      new HtmlWebpackPlugin({ title: 'Webpack html plugin' }),
    ],
  };

  const result = html({});

  t.deepEqual(result, expected);
});

ava('should call HtmlWebpackPlugin with custom parameter', (t) => {
  const expected = {
    plugins: [
      new HtmlWebpackPlugin({ title: 'Some title' }),
    ],
  };

  const result = html({ title: 'Some title' });

  t.deepEqual(result, expected);
});
