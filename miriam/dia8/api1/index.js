console.clear()
console.log(`Iniciando api1`)

const express = require('express')
const cors = require('cors')

const {getAlumnos,getAlumnosById, getAlumnosByNombre,getAlumnosByAprobado, getAlumnosByNombreAndAprobado,deleteAlumnos, postAlumnos,putAlumnos,patchAumnos}= require('./controller')
const{middleware404, middleware500}= require('./middlewares')
const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

    app.get (`/alumnos`, getAlumnos)
    app.get(`/alumnos/_id/:_id`,getAlumnosById)
    app.get('/alumnos/nombre/:nombre', getAlumnosByNombre)
    app.get('/alumnos/aprobado/:aprobado', getAlumnosByAprobado)
    app.get('/alumnos/multiples/:nombre/:aprobado', getAlumnosByNombreAndAprobado)
    app.post('/alumnos', postAlumnos)
    app.put('/alumnos', putAlumnos)
    app.patch('/alumnos', patchAumnos)
    app.delete('/alumnos/:_id', deleteAlumnos)

    app.use(middleware404)
    app.use(middleware500)


app.listen(3000, ()=> console.log(`Iniciando api1`))

