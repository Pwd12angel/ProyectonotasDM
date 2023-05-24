const express = require('express');
const bycrypt = require('bcrypt');
const route = express();
const usuarios = require('../models/user');

route.post('/nuevoUsuario',async (req,res) =>{
    let body = req.body;
    console.log(body);
    //constante para el hash 
    //pasamos la contraseña y el poder de hasheo 
    const passHash = await bycrypt.hash(body.contrasenia,10);

    let newUsuario = new usuarios({
       name: body.name,
       correo: body.correo,
       contrasenia: passHash,
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