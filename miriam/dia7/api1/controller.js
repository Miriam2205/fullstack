const getAlumnos = ( req, res, next ) => {
    res.json('Haciendo get en /alumnos')
}

//Buscar mediante id
const getAlumnosById = (req, res, next) => {

    const { _id } = req.params
    res.json(`Buscando mediante el ID ${_id}`)
}
const getAlumnosByNombreAndAprobado = (req, res, next) => {
    const { nombre , aprobado } = req.params

    res.json(`Buscando multiple ${nombre} y ${aprobado}`)
}

const postAlumnos = (req, res, next ) => {
    const {nombre, edad, curso } = req.body

    res.json(`Añadiendo el alumno ${nombre} años y estudia ${curso}`)
}
const putAlumnos = (req, res, next) => {
    const {_id, ...datos} = req.body
    res.json(datos)
}
const patchAlumnos = (req, res, next) => {
    const { _id, ...datos} = req.body
    res.json(datos)
}
const deleteAlumnos = (req, res, next) => {
    const {_id} = req.params
    res.json(`Haciendo delete en /alumnos con el id ${_id}`)
}
module.exports = {
    getAlumnos,
    getAlumnosById,
    postAlumnos,
    putAlumnos,
    patchAlumnos,
    deleteAlumnos,
    getAlumnosByNombreAndAprobado
}