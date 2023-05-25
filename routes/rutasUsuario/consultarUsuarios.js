const express = require('express');
const route = express();
const usuarios = require('../../models/user');

route.get('/usuarios',async (req,res) =>{

    const prov = await usuarios.find().then(function(data){
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

module.exports = route;