import { connect, connection } from 'mongoose';
import options from '../../options';

// To avoid of purging db on production
if (process.env.NODE_ENV === 'development') {
  connect(options.mongo);
  connection.on('open', () => connection.db.dropDatabase(() => {
    console.log('WARNING: Database has been dropped.');
    process.exit();
  }));
}
