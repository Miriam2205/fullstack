const express = require('express')
const router = express.Router()

const {getAlumnos, postAlumnos, patchAlumnos, deleteAlumnos, putAlumnos, getAlumnosById, getAlumnosNombre, getAlumnosAprobado, getAlumnosByNombreAndAprobado } = require('./controller')
const { middleware404, middleware500} = require('./middlewares')


router.route(`/alumnos`)
    .get(getAlumnos)
    .post(postAlumnos)
    .put(putAlumnos)
    .patch(patchAlumnos)
    .delete(deleteAlumnos)

router.route(`/alumnos/_id/:_id`)
    .get(getAlumnosById)
    

router.route(`/alumnos/nombre/:nombre`)
    .get(getAlumnosNombre)

router.route('/alumnos/aprobado/:aprobado')
    .get(getAlumnosAprobado)

router.route(`/alumnos/multiples/:nombre/:`)
    .get(getAlumnosByNombreAndAprobado)

router.route(`/alumnos/:_id`)
    .delete(deleteAlumnos)



router.all('/*splat', middleware404)
router.use(middleware500)

module.exports = {
    router
}