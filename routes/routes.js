const express = require('express');

const app = express();



app.use(require('./rutasNotas/consultarNotas'));
app.use(require('./rutasUsuario/consultarUsuarios'));
app.use(require('./rutasUsuario/newUser'));
app.use(require('./rutasUsuario/login'));
app.use(require('./rutasNotas/newNotas'));
app.use(require('./rutasUsuario/borrarCueta'));
app.use(require('./rutasNotas/actualizarNota'));
app.use(require('./rutasNotas/borrarNotasUsuario'));
app.use(require('./rutasUsuario/buscarUsuario'));
app.use(require('./rutasNotas/actualizarEstado'));
app.use(require('./rutasUsuario/buscarUsuarioPorCorreo'));
app.use(require('./rutasNotas/notasCumplidas'));
app.use(require('./rutasNotas/buscarNotaId'));
app.use(require('./rutasNotas/contarNotas'));
app.use(require('./rutasNotas/prioridadAlta'));
app.use(require('./rutasNotas/prioridadMedia'));
app.use(require('./rutasNotas/prioridadBaja'));

app.use(require('./rutasNotas/borrarNota'));

module.exports = app;