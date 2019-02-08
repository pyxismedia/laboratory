const { app } = require('../app/app');

app.get('/', (req, res) => res.render('index', { title: 'Hey' }));
