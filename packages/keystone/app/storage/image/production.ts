import { join } from 'path';
import s3 from 'keystone-storage-adapter-s3';
import { Storage, Field, expandPath } from 'keystone';

const { Types } = Field;

const image = new Storage({
  adapter: s3,
});

export default image;
