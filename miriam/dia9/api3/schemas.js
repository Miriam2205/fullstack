const mongoose = require('mongoose')
const peliculaSchema = new mongoose.Schema(
    {titulo: String, director: String, fecha: Number, genero: String},
    {collection: 'peliculas'}
)

const Pelicula = mongoose.model ('peliculas', peliculaSchema)

module.exports={
    Pelicula
}