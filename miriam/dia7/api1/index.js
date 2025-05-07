console.clear()
console.log('Iniciando Proyecto api1')

const express = require ('express')
const {getAlumnos, getAlumnosById, getAlumnosNombre, getAlumnosAprobado,getAlumnosByNombreAndAprobado,postAlumnos, postAlumnosById,postAlumnosNombre,postAlumnosAprobado, postAlumnosByNombreAndAprobado, putAlumnos,putAlumnosById, patchAlumnos, deleteAlumnos, putAlumnosNombre, putAlumnosAprobado} = require('./controller')
const { middleware404, middleware500 } = require('./middlewares')

const app = express()


    //Middleware
    app.use( express.json()) //Analiza las peticiones JSON
    app.use( express.urlencoded({ extended : false }))

    //Metodos
    app.get('/alumnos', getAlumnos)
    //Buscamos mediante id
    app.get('/alumnos/id/:_id', getAlumnosById)
    //Buscamos mediante nombre
    app.get('/alumnos/nombre/:_nombre', getAlumnosNombre)
    //Buscamos mediante aprobado
    app.get('/alumnos/aprobado/:aprobado',getAlumnosAprobado )
    //Buscamos mediante nombre y aprobado
    app.get(`/alumnos/multiples/:nombre/:aprobado`, getAlumnosByNombreAndAprobado)



    app.post('/alumnos', postAlumnos)
    //Buscar por id
    app.post('/alumnos/id/:_id', postAlumnosById)
    //Buscamos por nombre
    app.post('/alumnos/nombre/:_nombre', postAlumnosNombre)
    //Buscamos por aprobado 
    app.post('/alumnos/aprobado/:_aprobado', postAlumnosAprobado)
    //Buscamos por nombre y aprobado 
    app.post('/alumnos/multiples/:_nombre/:_aprobado', postAlumnosByNombreAndAprobado)




    app.put('/alumnos', putAlumnos)
    //Buscamos por id
    app.put('/alumnos/_id/:_id', putAlumnosById)
    //Buscamos por nombre
    app.put('/alumnos/_nombre/:_nombre', putAlumnosNombre)
    //Buscamos por aprobado
    app.put('/alumnos/_aprobado/:_aprobado', putAlumnosAprobado)
    //Buscamos por nombre y aprobado 
    




    app.patch('/alumnos/_nombre/:_nombre', patchAlumnos)
    app.delete('/alumnos/:_id', deleteAlumnos)



    app.use(middleware404)
    app.use(middleware500)

    app.listen( 3000, ()=> console.log('Iniciando api rest 1'))