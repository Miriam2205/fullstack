const getAlumnos = ( req, res, next) => {
    res.json('Haciendo api con get en alumnos')
}
const postAlumnos = (req, res, next) => {
    res.json('Haciendo api con post en alumnos')
}
const putAlumnos = (req, res, next) => {
    res.json('Haciendo api con put en alumnos')

}
const patchAlumnos = (req, res, next) => {
    res.json('Haciendo api con patch en alumnos')

}
const deleteAlumnos = (req, res, next) => {
    res.json('Haciendo api con delete en alumnos')
}

module.exports = {
    getAlumnos,
    postAlumnos,
    putAlumnos,
    patchAlumnos,
    deleteAlumnos
}