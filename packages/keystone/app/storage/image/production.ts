import s3 from 'keystone-storage-adapter-s3';
import { Storage } from 'keystone';

const image = new Storage({
  adapter: s3,
});

export default image;
