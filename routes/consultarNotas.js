const express  = require("express");

const route = express();

route.get('/consultarNota',(req,res)=>{
    res.send('Mostrando todas las notas ')
})

module.exports = route