// -- dependencies --
// Register observable as part of mongoose
import keystone from 'keystone';
// -- application --
import './models';
import routes from './routes';
import options from './options';

keystone.init(options);
keystone.set('routes', routes);
keystone.start();
