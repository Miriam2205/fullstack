const getAlumnos = (req, res, next) => {
    try {
        res.json('Haciendo api en/alumnos')
    } catch (error) {
        next(error)
    }
}

const postAlumnos = (req, res, next) => {
    try {
        res.json('Haciendo api en/alumnos')
    } catch (error) {
        next(error)
    }

}
const putAlumnos = (req, res, next) => {
    try {
        res.json('Haciendo api en/alumnos')
    } catch (error) {
        next(error)
    }

}
const patchAlumnos = (req, res, next) => {
    try {
        res.json('Haciendo api en/alumnos')

    } catch (error) {
        next(error)
    }
}
const deleteAlumnos = (req, res, next) => {
    try {
        res.json ('Haciendo api en/alumnos')
    } catch (error) {
        next(error)
    }
}
module.exports ={
    getAlumnos,
    postAlumnos,
    putAlumnos,
    patchAlumnos,
    patchAlumnos,
    deleteAlumnos
}