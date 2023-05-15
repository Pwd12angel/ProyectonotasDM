const express = require('express');
const route = express();

const nota = require('../models/nota');


route.delete('/borrarTodasNotas/:id',async(req,res)=>{

    const {id} = req.params;

    const proN = nota.deleteMany({autor: id}).then(function(data){
        if(data){
            res.json({
                "mnsj":"Notas eliminadas del usuario" 
            })
        }
    }).catch(function(err){
        if(err){
            res.json({
                "mnsj":"error al eliminar las notas del usuario" 
            })
    }});

})

module.exports = route;