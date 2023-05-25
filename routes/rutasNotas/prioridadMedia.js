const express = require('express')
const route = express();
const nota = require('../../models/nota');

route.get('/prioridadMed/:id',async(req,res)=>{
    const {id} = req.params;
    const proU = await nota.find({autor : id, prioridad: {$all: "Media"},categoria: false }).exec().then(function(data){
        if(data){
            res.json({
                data 
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                mensaje:"Error",
                err
            })
    }});

})

module.exports = route;