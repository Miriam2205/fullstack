const express=  require('express')
const router = express.Router()
const {getPersonajes, getPersonajesByNombre, getPersonajesByCasa, getPersonajesVivos, postPersonaje, putPersonaje, deletePersonaje} = require('./controllers')
const {middleware404, middleware500} = require('./middlewares')

router.route('/personajes')
    .get(getPersonajes)
    .post(postPersonaje)
    .put(putPersonaje)

router.route('/personajes/nombre/:nombre')
    .get(getPersonajesByNombre)

router.route('/personajes/casa/:casa')
    .get(getPersonajesByCasa)
router.route('/personajes/vivo/:vivo')
    .get(getPersonajesVivos)

router.route('/personajes/_id/:_id')
    .delete(deletePersonaje)

    router.all('/*splat', middleware404)
    router.use(middleware500)

module.exports = {
    router
}