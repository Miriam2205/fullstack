console.clear()
console.log(`Iniciando api6`)

const express = require('express')
const cors = require('cors')

const {router} = require ('./router')
const {PORT} = require('dotenv').config().parsed

const app = express()

 app.use(cors())
 app.use(express.json())
 app.use(express.urlencoded({extended: false}))
   app.use(router)




app.listen (PORT, () => console.log())