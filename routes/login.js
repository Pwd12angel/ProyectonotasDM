const express = require('express');
const route = express();
const User = require('../models/user');
const { json } = require('body-parser');



route.post('/login',async (req,res) =>{
    const {body} = req;
   
    const {correo,contrasenia} = body;


    const user = await User.findOne({correo});

    console.log("frond "+contrasenia)
    console.log("back "+user.contrasenia);

    if(contrasenia == user.contrasenia){
        res.send({
            name: user.name
         })
    }
    else{
        res.status(401).json(
            {
             error: 'Usuario invalidado'
            }
         )
    }

    


})

module.exports = route;