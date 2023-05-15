const mongoose = require('mongoose');

const notaSchema = mongoose.Schema;

const newNota = new notaSchema({
    nameNota:{
        type:String
    },
    categoria:{
        type:String
    },
    fechaLimite:{
        type:String
    },
    contenido:{
        type:String
    },
    prioridad:{
        type:String
    }  
})

module.exports = mongoose.model('notasU',newNota);

