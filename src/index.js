//Crear el servidor
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./routes/index.routes')

app.use(bodyParser.json())
app.use('/api', userRoutes);
app.listen(process.env.PORT)
console.log(`Server on ${process.env.PORT}`)