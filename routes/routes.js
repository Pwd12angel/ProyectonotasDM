const express = require('express');

const app = express();

app.use(require('./consultarNotas'));

module.exports = app;