console.clear()
console.log('Iniciando Proyecto api1')

const express = require ('express')
const {getAlumnos , postAlumnos, putAlumnos, patchAlumnos, deleteAlumnos } = require('./controller')

const app = express()


    //Middleware
    app.use( express.json()) //Analiza las peticiones JSON
    app.use( express.urlencoded({ extended : false }))

    //Metodos
    app.get('/alumnos', getAlumnos)
    app.post('/alumnos', postAlumnos)
    app.put('/alumnos', putAlumnos)
    app.patch('/alumnos', patchAlumnos)
    app.delete('/alumnos', deleteAlumnos)




    app.listen( 3000, ()=> console.log('Iniciando api rest 1'))