const getAlumnos = (req, res, next) => {
    res.json('Haciendo api get con alumnos')
}
const postAlumnos = (req, res, next) => {
    res.json ('Haciendo api post en alumnos')
}
const putAlumnos = (req, res, next) => {
    res.json('Haciendo api put en alumnos')
}
const patchAlumnos = (req, res, next) => {
    res.json('Haciendo api patch en alumnos')
}
const deleteAlumnos = (req, res, next) => {
    res.json('Haciendo api delete en alumnos')
}
module.exports = {
    getAlumnos,
    postAlumnos, 
    putAlumnos,
    patchAlumnos,
    deleteAlumnos
}