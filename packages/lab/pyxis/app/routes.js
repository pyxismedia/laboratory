const { app } = require('./app');

app.get('/', (req, res) => res.render('index.hbs', { title: 'Hey' }));