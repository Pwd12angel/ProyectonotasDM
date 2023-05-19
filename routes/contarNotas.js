
const express = require('express');
const route = express();
const notas = require('../models/nota');

route.get('/contar/notas/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const cantidadNotas = await notas.countDocuments({ autor: id });
      res.json({ cantidadNotas });
    } catch (err) {
      res.status(500).json({ mensaje: 'Error interno del servidor', error: err });
    }
});

module.exports = route;