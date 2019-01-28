import { join } from 'path';
import { Storage, Field, expandPath } from 'keystone';

const { Types } = Field;

const image = new Storage({
  adapter: Storage.Adapters.FS,
  fs: {
    path: './app/public/uploads/images',
    publicPath: '/public/uploads/',
  },
  schema: {
    filename: String,
  },
});

export default image;
