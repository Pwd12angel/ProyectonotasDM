const express = require('express');
const route = express();
const nota = require('../models/nota');

//Borrar un registro 
route.delete('/nota/borrar/:id',async (req,res) =>{
    const {id} = req.params
    const prov = await nota.deleteOne({_id: id}).then(function(data){
        if(data){
            res.json({
                "mnsj":"Nota Eliminada" 
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                mensaje:"error al eliminar la nota",
                err
            })
    }});

});

module.exports = route