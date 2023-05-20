const express = require('express');

const app = express();



app.use(require('./consultarNotas'));
app.use(require('./consultarUsuarios'));
app.use(require('./newUser'));
app.use(require('../routes/login'));
app.use(require('../routes/newNotas'));
app.use(require('../routes/borrarCueta'));
app.use(require('../routes/actualizarNota'));
app.use(require('../routes/borrarNotasUsuario'));
app.use(require('../routes/buscarUsuario'));
app.use(require('./actualizarEstado'));
app.use(require('./buscarUsuarioPorCorreo'));
app.use(require('./notasCumplidas'));
app.use(require('../routes/buscarNotaId'));
app.use(require('../routes/contarNotas'));
app.use(require('./prioridadAlta'));
app.use(require('./prioridadMedia'));
app.use(require('./prioridadBaja'));

app.use(require('../routes/borrarNota'));

module.exports = app;