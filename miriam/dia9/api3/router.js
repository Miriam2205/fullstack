const express = require('express')
const router = express.Router()

const {getPeliculas,getPeliculasById, getPeliculasByGenero, getPeliculasByDirector, getPeliculasByFecha, postPeliculas, putPeliculas, deletePeliculas} = require('./controller')
const {middleware404, middleware500} = require('./middlewares')


router.route('/pelicula')
    .get(getPeliculas)
    .post(postPeliculas)
    .put(putPeliculas)

router.route('/pelicula/_id/:_id')
    .get(getPeliculasById)
    .delete(deletePeliculas)

router.route('/pelicula/genero/:genero')
    .get(getPeliculasByGenero)

router.route('/pelicula/director/:director')
    .get(getPeliculasByDirector)

router.route('/pelicula/fecha/:fecha')
    .get(getPeliculasByFecha)

router.all('/*splat', middleware404)
router.use(middleware500)

module.exports={
    router

}