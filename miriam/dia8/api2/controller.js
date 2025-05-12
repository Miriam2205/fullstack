const getAlumnos = (re, res, next) => {
    try {
        
        res.status(200).json(`Buscando alumnos en /alumnos`)
    } catch (error) {
        next(error)
    }
}
const getAlumnosById = (req, res, next)=> {
    try {
        const {_id} = req.params
        res.status(200).json({message: `Buscar el id ${_id} de alumno`, data: []})
    } catch (error) {
        
    }
}
const getAlumnosByNombre = (req, res,next) => {
    try {
        const {nombre} = req.params
        res.status(200).json({message: `Buscando nombres ${nombre} de alumnos}`, data: []})
    } catch (error) {
        next(error)
    }
}
const getAlumnosByAprobado = (req, res, next) => {
    try {
        const {aprobado} = req.params
       res.status(200).json({message: `Buscando alumnos aprobados ${aprobado}`, data: []}) 
    } catch (error) {
        
    }next(error)
}
const getAlumnosByNombreAndAprobado =(req, res, next)=> {
    try {
        const {nombre, aprobado} = req.params
        res.status(200).json({message: `Buscando nombres ${nombre}y aprobados ${aprobado}`, data: []})
    } catch (error) {
        next(error)
    }
}


const postAlumnos = (req, res, next)=> {
    try {
        const {nombre, edad, curso} = req.body
        res.status(200).json( {message: `Publicando alumnos con nombre ${nombre}, con la edad ${edad} y que estudia ${curso}`, data: []})
    } catch (error) {
        next(error)
    }
}

const putAlumnos = (req, res, next)=> {
    try {
        const {_id, ...datos} = req.body
        res.status(200).json(datos)
    } catch (error) {
        next(error)
    }
}
const patchAlumnos = (req, res, next)=> {
    try {
        const {_id, ...datos} = req.body
        res.status(200).json(datos)
    } catch (error) {
        next(error)
    }
}
const deleteAlumnos = (req, res, next)=> {
    try {
        const {_id} = req.params
        res.status(200).json(`Eliminando alumno con el id ${_id} `)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAlumnos,
    getAlumnosById,
    getAlumnosByAprobado,
    getAlumnosByNombre,
    getAlumnosByNombreAndAprobado,
    postAlumnos,
    putAlumnos,
    patchAlumnos,
    deleteAlumnos
}