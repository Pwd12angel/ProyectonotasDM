const express = require('express');

const app = express();
/* prueba RBN */
app.use(require('./consultarNotas'));
app.use(require('./consultarUsuarios'));
app.use(require('./newUser'));
app.use(require('../routes/login'));
app.use(require('../routes/newNotas'));
app.use(require('../routes/borrarCueta'));

//borrar
app.use(require('../routes/borrarNota'));

module.exports = app;