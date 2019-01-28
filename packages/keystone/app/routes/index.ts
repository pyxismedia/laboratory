// -- dependencies --
import { ApolloServer } from 'apollo-server-express';
import { importer, pre, set } from 'keystone';
// -- application --
import * as middleware from './middleware';
import schema from './schema';
import * as resolvers from './resolvers';

const importRoutes = importer(__dirname);

// Common Middleware
pre('routes', middleware.initErrorHandlers);
pre('routes', middleware.initLocals);
pre('render', middleware.flashMessages);

// Handle 404 errors
set('404', (req, res) => res.notfound());

// Handle other errors
set(
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
