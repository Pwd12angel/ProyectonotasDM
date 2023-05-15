const express  = require("express");
const route = express();
const notas = require('../models/nota');


route.get('/notas/:id',async (req,res) =>{
    const {id} = req.params
    const prov = await notas.find({autor: id}).then(function(data){
        if(data){
            res.json({
                data
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                mensaje:"error",
                err
            })
    }});

    console.log(prov);

});

module.exports = route