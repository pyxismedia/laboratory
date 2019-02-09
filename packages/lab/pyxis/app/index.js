const { app } = require('./app');
const { PORT } = require('./constants');

require('./middlewares');
require('./routes');

app.use(function(req, res, next){
  res.locals.session = req.session;
  next();
});

app.listen(PORT, () => console.log('@pyxis/templates are running on port ' + PORT));
