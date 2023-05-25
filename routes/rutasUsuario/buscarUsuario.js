const express = require('express');
const route = express();
const user = require('../../models/user');


route.get('/buscarUsuario/:id',async(req,res)=>{
    const {id} = req.params
    console.log(id);
    const prou = await user.find({_id: id}).then(function(data){
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