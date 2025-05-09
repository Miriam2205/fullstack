console.clear()
console.log('Iniciando api3')


const express = require ( 'express')
const { getAlumnos,getAlumnosById,getAlumnosNombre,getAlumnosAprobado,getAlumnosByNombreAndAprobado, postAlumnos,postAlumnosById, putAlumnos, patchAlumnos, deleteAlumnos, postAlumnosNombre, postAlumnosAprobado, postAlumnosByNombreAndAprobado, putAlumnosById, putAlumnosNombre, putAlumnosAprobado, putAlumnosByNombreAndAprobado, patchAlumnosById, patchAlumnosAprobado, patchAlumnosNombre, patchAlumnosByNombreAndAprobado, deleteAlumnosById, deleteAlumnosAprobado, deleteAlumnosNombres, deleteAlumnosByNombreAndAprobado,  } = require('./controller')

const app = express()

    app.use(express.json())
    app.use(express.urlencoded({extendend: false}))

    //Metodo get
    app.get('/alumnos', getAlumnos)
    //ID
    app.get('/alumnos/_id/:_id', getAlumnosById)
    //Buscar nombre
    app.get('/alumnos/nombre/:nombre', getAlumnosNombre)
    //Buscar aprobados
    app.get('/alumnos/aprobado/:aprobado', getAlumnosAprobado)
    //Buscar nombre y aprobados
    app.get('/alumnos/mutiples/:nombre/:aprobado', getAlumnosByNombreAndAprobado)


    //Metodo post
    app.post('/alumnos', postAlumnos)
    //ID
    app.post('/alumnos/_id/:_id', postAlumnosById)
    //Nombre
    app.post('/alumnos/nombre/:nombre', postAlumnosNombre)
    //Aprobados
    app.post('/alumnos/aprobado/:aprobado', postAlumnosAprobado)
    //Nombre y aprobados
    app.post('/alumnos/multiples/:nombre/:aprobado', postAlumnosByNombreAndAprobado)

    //Metodo Put
    app.put('/alumnos', putAlumnos)
    //ID
    app.put('/alumnos/_id/:_id', putAlumnosById)
    //Nombre
    app.put('/alumnos/nombre/:nombre', putAlumnosNombre)
    //Aprobados
    app.put('/alumnos/aprobado/:aprobado', putAlumnosAprobado)
    //Nombre y aprobados
    app.put('/alumnos/multiples/:nombre/:aprobado', putAlumnosByNombreAndAprobado)

    //Metodo patch
    app.patch('/alumnos', patchAlumnos)
    app.patch('/alumnos/_id/:_id', patchAlumnosById)
    app.patch('/alumnos/nombre/:nombre', patchAlumnosNombre)
    app.patch('/alumnos/aprobado/:_aprobado', patchAlumnosAprobado)
    app.patch('/alumnos/multiples/:nombre/:aprobado', patchAlumnosByNombreAndAprobado)


    //Metodo delete
    app.delete('/alumnos', deleteAlumnos)
    app.delete('/alumnos/_id/:_id', deleteAlumnosById)
    app.delete('/alumnos/nombre/:nombre', deleteAlumnosNombres)
    app.delete('/alumnos/aprobado/:aprobado', deleteAlumnosAprobado)
    app.delete('/alumnos/multiples/:nombre/:aprobado', deleteAlumnosByNombreAndAprobado)




app.listen ( 3000, () => console.log('Express iniciada'))