import { MONGODB, PORT, HOST } from './constants';

export default {
  // Project Options http://keystonejs.com/docs/configuration/#options-project
  name: 'PYXIS',
  brand: 'PYXIS',
  // Express setting http://keystonejs.com/docs/configuration/#options-server
  favicon: 'public/favicon.ico',
  less: 'public',
  static: ['public'],
  views: 'templates/views',
  'view engine': 'jade',
  'auto update': true,
  mongo: MONGODB,
  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': '(your secret here)',
  host: HOST,
  port: PORT,
  'wysiwyg additional plugins': 'template,fullpage,fullscreen,table',
  'wysiwyg override toolbar': false,
  'wysiwyg menubar': false,
  'wysiwyg additional buttons': 'template,fullpage,blockquote,fullscreen,table',
  'wysiwyg additional options': {
    templates: [
      { title: 'Test', description: 'Testing use case', url: '/templates/template.html' }
    ]
  }
};
