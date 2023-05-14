const express = require('express');

const app = express();
/* prueba RBN */
app.use(require('./consultarNotas'));
app.use(require('./consultarUsuarios'));

module.exports = app;