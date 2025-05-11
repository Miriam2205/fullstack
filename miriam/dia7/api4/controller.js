
getAlumnos = (req, res, next)=> {
    try {
        res.json(`Haciendo get en /alumnos`)
    } catch (error) {
        next(error)
    }
}
postAlumnos = (req, res, next)=> {
    try {
        res.json(`Haciendo post en /alumnos`)
    } catch (error) {
        next(error)
    }
}
putAlumnos = (req, res, next)=> {
    try {
        res.json(`Haciendo put en /alumnos`)
    } catch (error) {
        next(error)
    }
}
patchAlumnos=(req, res, next)=> {
    try {
        res.json(`Haciendo patch en /alumnos`)
    } catch (error) {
        next(error)
    }
}
deleteAlumnos=(req, res, next)=> {
    try {
        res.json(`Haciendo delete en /alumnos`)
    } catch (error) {
        next(error)
    }
}
module.exports= {
    getAlumnos,
    postAlumnos,
    putAlumnos,
    patchAlumnos,
    deleteAlumnos
}