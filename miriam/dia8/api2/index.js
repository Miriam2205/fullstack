console.clear()
console.log(`Iniciando api2`)


const {router} = require('./router')
const express = require('express')
const {PORT, DATABASE_URL} = require ('dotenv').config().parsed

const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(router)

app.listen(PORT, ()=> console.log(`Iniciando api2 en local 3000`))