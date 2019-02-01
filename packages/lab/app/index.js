const { app } = require('./app');
const { PORT } = require('./constants');

require('./middlewares');
require('./routes');
require('../src/routes');

app.listen(PORT, () => console.log('@pyxis/templates are running on port ' + PORT));