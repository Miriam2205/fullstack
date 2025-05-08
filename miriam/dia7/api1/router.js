const express = require('express')
const router = express.Router()

const {getAlumnos, postAlumnos, patchAlumnos, deleteAlumnos, putAlumnos } = require('./controller')
const { middleware404, middleware500} = require('./middlewares')
//Middleware
//app.use( express.json()) //Analiza las peticiones JSON
//app.use( express.urlencoded({ extended : false }))

//Metodos
//app.get('/alumnos', getAlumnos)
//Buscamos mediante id
//app.get('/alumnos/id/:_id', getAlumnosById)
//Buscamos mediante nombre
//app.get('/alumnos/nombre/:_nombre', getAlumnosNombre)
//Buscamos mediante aprobado
//app.get('/alumnos/aprobado/:_aprobado',getAlumnosAprobado )
//Buscamos mediante nombre y aprobado
//app.get(`/alumnos/multiples/:_nombre/:_aprobado`, getAlumnosByNombreAndAprobado)

router.route(`/alumnos`)
    .get(getAlumnos)
    .post(postAlumnos)
    .put(putAlumnos)
    .patch(patchAlumnos)
    .delete(deleteAlumnos)

//app.post('/alumnos', postAlumnos)
//Buscar por id
//app.post('/alumnos/id/:_id', postAlumnosById)
//Buscamos por nombre
//app.post('/alumnos/nombre/:_nombre', postAlumnosNombre)
//Buscamos por aprobado 
//app.post('/alumnos/aprobado/:_aprobado', postAlumnosAprobado)
//Buscamos por nombre y aprobado 
//app.post('/alumnos/multiples/:_nombre/:_aprobado', postAlumnosByNombreAndAprobado)




//app.put('/alumnos', putAlumnos)
//Buscamos por id
//app.put('/alumnos/id/:_id', putAlumnosById)
//Buscamos por nombre
//app.put('/alumnos/nombre/:_nombre', putAlumnosNombre)
//Buscamos por aprobado
//app.put('/alumnos/aprobado/:_aprobado', putAlumnosAprobado)
//Buscamos por nombre y aprobado 
//app.put('/alumnos/multiples/:_nombre/:_aprobado', putAlumnosByNombreAndAprobado)



//app.patch('/alumnos', patchAlumnos)
//app.patch('/alumnos/id/:_id', patchAlumnosById)
//app.patch('/alumnos/nombre/:_nombre', patchAlumnosNombre)
//app.patch('/alumnos/aprobado/:_aprobado', patchAlumnosAprobado)
//app.patch('/alumnos/multiples/:_nombre/:_aprobado', patchAlumnosByNombreAndAprobado)



//app.delete('/alumnos', deleteAlumnos)
////app.delete('/alumnos/id/:_id', deleteAlumnosById)
//app.delete('/alumnos/nombre/:_nombre', deleteAlumnosNombres)
//app.delete('/alumnos/aprobado/:_aprobado', deleteAlumnosAprobado)
//app.delete('/alumnos/multiples/:_nombre/:_aprobado', deleteAlumnosByNombreAndAprobado)


//app.use(middleware404)
//app.use(middleware500)

router.all('/*splat', middleware404)
router.use(middleware500)

module.exports = {
    router
}