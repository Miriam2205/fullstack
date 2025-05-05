const getAlumnos = ( req, res, next ) => {
    res.json('Haciendo get en /alumnos')
}
const postAlumnos = (req, res, next ) => {
    res.json('Haciendo post en /alumnos')
}
const putAlumnos = (req, res, next) => {
    res.json('Haciendo put en/alumnos')
}
const patchAlumnos = (req, res, next) => {
    res.json('Haciendo patch en/alumnos')
}
const deleteAlumnos = (req, res, next) => {
    res.json('Haciendo delete en /alumnos')
}
module.exports = {
    getAlumnos,
    postAlumnos,
    putAlumnos,
    patchAlumnos,
    deleteAlumnos
}