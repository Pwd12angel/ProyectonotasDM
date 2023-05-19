const express = require("express");
const route = express();
const notas = require('../models/nota');

route.get('/nota/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const nota = await notas.findById(id);
    if (nota) {
      res.json(nota);
    } else {
      res.status(404).json({ mensaje: 'Nota no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensaje: 'Error interno del servidor', error: err });
  }
});

module.exports = route;