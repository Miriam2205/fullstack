const express = require ('express')
const router = express.Router()

const {getAlumnos, postAlumnos, putAlumnos, patchAlumnos, deleteAlumnos} = require('./controller')
const { middleware404, middleware500 } = require('./middlewares')


router.route(`/alumnos`)
    .get(getAlumnos)
    .post(postAlumnos)
    .put(putAlumnos)
    .patch(patchAlumnos)
    .delete(deleteAlumnos)



//app.use(middleware404)
//app.use(middleware500)

router.all('/*splat', middleware404)
router.use(middleware500)


module.exports = {
    router
}