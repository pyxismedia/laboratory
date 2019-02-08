const express = require('express');
const app = express();

app.use(express.static('styleguide'))

app.listen(process.env.PORT || 8080);