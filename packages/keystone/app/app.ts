// -- dependencies --
// Register observable as part of mongoose
import { init, set, start, import as imports, plugin } from 'keystone';

// -- application --
import './models';
import routes from './routes';
import options from './options';

init(options);
imports('models');
set('routes', routes);
start();
