const express = require('express')
const route = express();
const nota = require('../../models/nota');

route.get('/actualizarEstado/:id',async(req,res)=>{
    const {id} = req.params;
    const proU = await nota.findById(id);
    proU.categoria = !proU.categoria;

    await proU.save();

    res.json({
        "mnsj":"Estado de la nota actualizada" 
    })

})

module.exports = route;