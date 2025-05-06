const getAlumnos = ( req, res, next) => {
    res.json('Haciendo api get en /alumnos')
}
const postAlumnos = (req, res, next) => {
    res.json('Haciendo api post en /alumnos')
}

module.exports = {
    getAlumnos,
    postAlumnos
}