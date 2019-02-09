const { app } = require('./app');

app.get('/', (req, res) => res.render('index.hbs', { title: 'Hey' }));

const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/config.json')));

app.locals.nav = config.nav;

app.get('/', (req, res) => res.render('index', { title: 'Home' }));

config.routes.forEach(route => {
  app.get(route.route, (req, res) => res.render(path.join(__dirname, '../src/views/', route.view), { title: route.title }));
});
