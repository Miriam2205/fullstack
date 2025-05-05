console.clear()
console.log('Iniciando api2')

const express = require ('express')
const {getAlumnos } = require ('./controller')

const app = express()
app.use(express.json())
app.use( express.urlencoded({ extended : false }))


app.get('/alumnos', getAlumnos)

