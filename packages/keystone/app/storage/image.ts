import { join } from 'path';
import keystone, { Storage, Field } from 'keystone';

const { Types } = Field;

const image = new Storage({
  adapter: Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath(join(__dirname, '../public/images')),
    publicPath: '/images',
  },
  schema: {
    filename: String,
  },
});

export default image;
