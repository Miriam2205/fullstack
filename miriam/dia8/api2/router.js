const express = require('express')
const router = express.Router()
const { getAlumnos, getAlumnosByNombre,getAlumnosById, getAlumnosByAprobado, getAlumnosByNombreAndAprobado, postAlumnos, putAlumnos, patchAlumnos, deleteAlumnos } = require('./controller')
const { middleware404, middleware500 } = require ('./middlewares')

router.route('/alumnos')
    .get(getAlumnos)
    .post(postAlumnos)
    .put(putAlumnos)
    .patch(patchAlumnos)

router.route('/alumnos/_id/:_id')
    .get(getAlumnosById)

router.route('/alumnos/nombre/:nombre')
    .get(getAlumnosByNombre)

router.route('/alumnos/aprobado/:aprobado')
    .get(getAlumnosByAprobado)

router.route('/alumnos/multiples/:nombre/:aprobado')
        .get(getAlumnosByNombreAndAprobado)

router.route('/alumnos/_id/:_id')
    .delete(deleteAlumnos)


router.all('/*splat', middleware404)
router.use(middleware500)

module.exports ={
    router
}