const express = require('express')
const route = express();
const nota = require('../models/nota');

route.put('/actualizarNota',async(req,res)=>{
    const {id ,nameNota,fechaLimite,contenido,prioridad} = req.body;
    const proU = await nota.updateOne({_id:id}, {$set:{nameNota,fechaLimite,contenido,prioridad}}).then(function(data){
        if(data){
            res.json({
                "mnsj":"Nota Actualizada" 
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                mensaje:"error al actualizar nota",
                err
            })
    }});

})

module.exports = route;