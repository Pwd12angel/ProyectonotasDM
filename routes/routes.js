const express = require('express');

const app = express();
/* prueba RBN */
app.use(require('./consultarNotas'));

module.exports = app;