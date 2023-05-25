const express = require('express');
const route = express();
const user = require('../../models/user');


route.get('/buscarUsuarioPorCorreo/:correo',async(req,res)=>{
    const {correo} = req.params
    
    const prou = await user.find({correo: correo}).then(function(data){
        if(data){
            res.json({
                data 
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                mensaje:"error al consultar la inf del usuario",
                err
            })
    }});

});

module.exports = route