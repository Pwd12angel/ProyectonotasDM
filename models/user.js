const mongoose = require('mongoose');

const userSchema = mongoose.Schema;

const newUser = new userSchema({
    name:{
        type:String
    },
    correo:{
        type:String
    },
    contrasenia:{
        type:String
    } 
})

module.exports = mongoose.model('usuarios',newUser);

