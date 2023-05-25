const express = require('express');
const route = express();
const nota = require('../../models/nota');
const user = require('../../models/user');



//Borrar un registro 
route.delete('/borrarCuenta/:id',async (req,res) =>{
    const {id} = req.params
    const proU = await user.deleteOne({_id: id}).then(function(data){
        borrarTosalasNotas(id);
        if(data){
           
            res.json({
                "mnsj":"Cuenta Eliminada" 
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                mensaje:"error al eliminar la cuenta",
                err
            })
    }});

    function borrarTosalasNotas(idb){
        const proN = nota.deleteMany({autor: idb}).then(function(data){
            if(data){
                console.log("Notas eliminadas");
            }
        }).catch(function(err){
            if(err){
               console.log('Notas no eliminadas');
        }});
    
    }
    
});



module.exports = route