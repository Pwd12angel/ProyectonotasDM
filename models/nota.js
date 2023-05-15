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
    },
    autor: {type : mongoose.Schema.Types.ObjectId, ref:'usuarios'} 
})

module.exports = mongoose.model('notasU',newNota);

