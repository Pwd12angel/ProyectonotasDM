const express = require('express');

const app = express();

app.use(require('./consultarNotas'));
app.use(require('./consultarUsuarios'));

module.exports = app;