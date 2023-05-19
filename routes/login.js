const jwt = require('jsonwebtoken');
const express = require('express');
const route = express();
const User = require('../models/user');
const { json } = require('body-parser');

route.post('/login',async (req,res) =>{
    const {body} = req;
   
    const {correo,contrasenia} = body;

    const user = await User.findOne({correo});

    const validar = user === null ? false : contrasenia == user.contrasenia

    if(!(user && validar)){
         res.status(401).json(
            {
             error: 'Usuario invalidado'
            }
         )
    }
    else{

        const userToken = {
            id: user._id,
            userName: user.name
        }

        //firmamos el token 
        const token = jwt.sign(userToken,'123')
        res.send({
            id: user._id,
            token
         })
         
    }

})

module.exports = route;