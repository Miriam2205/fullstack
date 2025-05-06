console.clear()
console.log('Iniciando Proyecto api1')

const express = require ('express')
const {getAlumnos , postAlumnos, putAlumnos, patchAlumnos, deleteAlumnos, getAlumnosById, getAlumnosByNombreAndAprobado} = require('./controller')

const app = express()


    //Middleware
    app.use( express.json()) //Analiza las peticiones JSON
    app.use( express.urlencoded({ extended : false }))

    //Metodos
    app.get('/alumnos', getAlumnos)
    //Buscamos mediante id
    app.get('/alumnos/_id/:_id', getAlumnosById)
    //Buscamos mediante nombre
    //Buscamos mediante aprobado
    //Buscamos mediante nombre y aprobado

    app.get(`/alumnos/multiples/:nombre/:aprobado`, getAlumnosByNombreAndAprobado)

    app.post('/alumnos', postAlumnos)
    app.put('/alumnos', putAlumnos)
    app.patch('/alumnos', patchAlumnos)
    app.delete('/alumnos/:_id', deleteAlumnos)


    app.listen( 3000, ()=> console.log('Iniciando api rest 1'))