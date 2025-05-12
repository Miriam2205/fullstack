const mongoose = require ('mongoose')

//Schema
const alumnoSchema = new mongoose.Schema(
    {nombre: String, edad: Number, curso: String, aprobado: Boolean},
    {collection : 'alumnos'}
)

//Model

const Alumno = mongoose.model ('Alumno', alumnoSchema)
module.exports = {
    Alumno
}