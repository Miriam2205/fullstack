console.clear()
console.log('Iniciando Proyecto api 1')

const express = require('express')
const { router } = require('./router')


const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended : false }))
    app.use( router )
    

    app.listen( 3000, ()=> console.log('Iniciando api rest 1'))