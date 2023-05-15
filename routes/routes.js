const express = require('express');

const app = express();
/* prueba RBN */
app.use(require('./consultarNotas'));
app.use(require('./consultarUsuarios'));
app.use(require('./newUser'));
app.use(require('../routes/login'))

module.exports = app;