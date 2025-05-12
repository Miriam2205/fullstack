console.clear()
console.log(`Iniciando api1`)

const mongoose = require('mongoose')
const express = require('express')
const {router} = require('./router')
const {PORT, DATABASE_URL } =  require('dotenv').config().parsed


const conectar = async ()=> {
    await mongoose.connect(DATABASE_URL)
        .then (()=> console.log(`Mongoose conectado a ${DATABASE_URL}`))
        .catch( error => console.log(`Error al conectar ${error.message}`))
}

conectar()

const app = express()

    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(router)

    
  

app.listen(PORT, ()=> console.log(`Iniciando api rest en el puerto ${PORT}`))

