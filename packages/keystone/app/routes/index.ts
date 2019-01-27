// -- dependencies --
import { ApolloServer } from 'apollo-server-express';
import keystone from 'keystone';
// -- application --
import * as middleware from './middleware';
import schema from './schema';
import * as resolvers from './resolvers';

const importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', (req, res) => res.notfound());

// Handle other errors
keystone.set(
  '500',
  (error: { message?: string; stack?: string } = {}, req, res) => {
    const { message, stack } = error;
    res.err(stack, undefined, message);
  }
);

// Load Routes
const routes = { views: importRoutes('./views') };

const server = new ApolloServer({ resolvers, typeDefs: schema });

// Bind Routes
export default app => {
  server.applyMiddleware({ app });

  app.get('/', routes.views.index);
};
