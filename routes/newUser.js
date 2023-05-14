const express = require('express');
const route = express();
const usuarios = require('../models/user');

route.post('/nuevoUsuario',async (req,res) =>{
    let body = req.body;
    console.log(body);
    let newUsuario = new usuarios({
       name: body.name,
       correo: body.correo,
       contrasenia: body.contrasenia,
    });
    newUsuario.save().then((data)=>{
        return res.status (200).json({
            ok: true,
            message: "datos guardados",
            data
        });
    })
    .catch((err)=>{
        return res.status (500).json({
            ok: false,
            message: "error al guardar",
            err
        });
    })
});

module.exports = route;