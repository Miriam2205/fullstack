const mongoose = require('mongoose')

const personajeSchema = new mongoose.Schema (
    {nombre: String, edad: Number, casa: String, vivo: Boolean},
    {collection: 'magos'}
)

const Personaje = mongoose.model('Personajes', personajeSchema)

module.exports= {
    Personaje
}