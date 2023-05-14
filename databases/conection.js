const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = 'mongodb+srv://Pwd12angel:DM12345@clusterdm.zzk2ajn.mongodb.net/Notas?retryWrites=true&w=majority';

mongoose.connect(uri,{
    //modulod de configuracion de mongoose
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//Then nos retorna una promesa y la tratamos con catch
    .then(db => console.log('Base de datos conectada ATLAS'))
    .catch(err => console.log(err));
    

mongoose.connection.on('open', _=> {
    console.log("Conexion exitosa ",uri);
});