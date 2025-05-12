    const express = require('express')
    const router = express.Router()
    const {getAlumnos,getAlumnosById, getAlumnosByNombre,getAlumnosByAprobado, getAlumnosByNombreAndAprobado,deleteAlumnos, postAlumnos,putAlumnos,patchAumnos}= require('./controller')
    const { middleware404, middleware500 } = require('./middlewares')

    router.route('/alumnos')
        .get ( getAlumnos)
        .post( postAlumnos)
        .put( putAlumnos)
        .patch( patchAumnos)
    
    router.route(`/alumnos/_id/:_id`)
        .get(getAlumnosById)
    
    router.route(`/alumnos/nombre/:nombre`)
        .get(getAlumnosByNombre)
    router.route(`/alumnos/aprobado/:aprobado`)
        .get(getAlumnosByAprobado)
    
    router.route(`/alumnos/multiples/:nombre/:aprobado`)
        .get(getAlumnosByNombreAndAprobado)

    router.route(`/alumnos/:_id`)
    .delete(deleteAlumnos)


    router.all('/*splat', middleware404)
    router.use(middleware500)

    module.exports = {
        router
    }

