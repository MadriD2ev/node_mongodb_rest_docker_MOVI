//Conexion a la BD
const mongoose = require("mongoose")

function database(){
    const URI = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`
    mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(
        (db) => console.log("Nos hemos conectado a la base de datos: ", db.connection.host)
    )
    .catch((err) => console.error(err));
}

module.exports = database;