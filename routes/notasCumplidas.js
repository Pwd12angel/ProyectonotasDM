const express = require('express')
const route = express();
const nota = require('../models/nota');

route.get('/Realizadas/:id',async(req,res)=>{
    const {id} = req.params;
    const proU = await nota.find({autor : id, categoria: {$all: true}}).exec().then(function(data){
        if(data){
            res.json({
                data 
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                mensaje:"error al consultar notas realizadas",
                err
            })
    }});

})

module.exports = route;