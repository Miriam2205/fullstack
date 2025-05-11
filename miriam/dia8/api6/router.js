const express = require('express')
const router = express.Router()

const {getAlumnos, postAlumnos, putAlumnos, patchAlumnos, deleteAlumnos, getAlumnosNombre} = require('./controllers')
const {middleware404, middleware500} = require('./middlewares')

router.route(`/alumnos`)
    .get(getAlumnos)
    .post(postAlumnos)
    .put(putAlumnos)
    .patch(patchAlumnos)
    .delete(deleteAlumnos)

router.route(`alumnos/nombre/:nombre`)
    .get(getAlumnosNombre)


    router.all('/*splat', middleware404)
    router.use(middleware500)

module.exports ={
    router

}