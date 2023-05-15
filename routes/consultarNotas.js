const express  = require("express");
const route = express();
const notas = require('../models/nota');


route.get('/notas',async (req,res) =>{

    const prov = await notas.find().then(function(data){
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

});

module.exports = route