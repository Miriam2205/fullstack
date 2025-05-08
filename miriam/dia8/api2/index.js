console.clear()
console.log('Iniciando api2')

const express = require ('express')
const { router } = require('./router')


const app = express()

    app.use(express.json())
    app.use( express.urlencoded({ extended : false }))
    app.use(router)
    

app.listen (3000, () => console.log('Express Iniciada'))