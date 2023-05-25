const jwt = require('jsonwebtoken');
const express = require('express');
const route = express();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { json } = require('body-parser');

route.post('/login',async (req,res) =>{
    const {body} = req;
   
    const {correo,contrasenia} = body;

    const user = await User.findOne({correo});

    const validar = user === null ? false : await bcrypt.compare(contrasenia,user.contrasenia);

    console.log(validar);
    
    if(!(validar)){
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