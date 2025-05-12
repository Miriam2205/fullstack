console.clear()
console.log(`Iniciando api1`)

const express = require('express')
const {router} = require('./router')
const {PORT } =  require('dotenv').config().parsed
const app = express()

    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(router)

    
  

app.listen(PORT, ()=> console.log(`Iniciando api rest en el puerto ${PORT}`))

