const express = require('express');
const route = express();
const notas = require('../models/nota');

route.post('/nuevaNota',async (req,res) =>{
    let body = req.body;
    console.log(body);
    let newNota = new notas({
       nameNota: body.nameNota,
       categoria: body.categoria,
       fechaLimite: body.fechaLimite,
       contenido: body.contenido,
       prioridad: body.prioridad,
       autor: body.autor,
    });
    newNota.save().then((data)=>{
        return res.status (200).json({
            ok: true,
            message: "nota Guaradad",
            data
        });
    })
    .catch((err)=>{
        return res.status (500).json({
            ok: false,
            message: "error al guardar la nota",
            err
        });
    })
});

module.exports = route;