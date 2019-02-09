const { app, express } = require('./app');
const sass = require('node-sass-middleware');
const path = require('path');
const { PACKAGE_DIR, VIEWS_PATH } = require('./constants');
const layouts = require('handlebars-layouts');
const handlebars = require('handlebars');
const handlebarsWax = require('handlebars-wax');
const packageImporter = require('node-sass-package-importer');

const hbs = handlebarsWax(handlebars)
  .partials(path.join(PACKAGE_DIR, 'app/partials/*.hbs'))
  .partials(path.join(PACKAGE_DIR, 'app/layouts/*.hbs'))
  .partials(path.join(PACKAGE_DIR, 'src/views/partials/*.hbs'))
  .helpers(layouts);

handlebars.registerHelper('log', function(data) {
  console.log(data);
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', VIEWS_PATH);
app.use(express.static('src'));
app.use(sass({
  src: path.join(PACKAGE_DIR, 'src'),
  debug: true,
  importer: packageImporter(),
}));
