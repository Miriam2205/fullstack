
const getAlumnos = (req, res, next) => {
    try {
        res.json({message: `Haciendo get nombres en /alumnos`, data: []})
    } catch (error) {
        next(error)
    }
}
const getAlumnosNombre = (req, res, next) => {
    try {
        const {nombre} = req.params
        res.status({message: `Haciendo get de nombres ${nombre}`})
    } catch (error) {
        next(error)
    }
}
const getAlumnosAprobado = (req, res, next) =>{
    try {
        res.json({message: `Haciendo get`})
    } catch (error) {
        
    }
}
const postAlumnos = (req, res, next) => {
    try {
        const {nombre, aprobado, curso} = req.body
        res.status(200).json({message: `Haciendo post con nombre ${nombre} y aprobado ${aprobado} en curso ${curso}`, data : []})
    } catch (error) {
        
    }
}
const putAlumnos = (req, res, next) => {
    try {
        res.status(200).json({message: `Haciendo put en /alumnos`})
    } catch (error) {
        
    }
}
const patchAlumnos = (req, res, next) => {
    try {
        res.status(200).json({message: `Haciendo patch en/alumnos `})
    } catch (error) {
        
    }
}
const deleteAlumnos = (req, res, next) => {
    try {
        const{_id}=req.params
        res.status(200).json(`Haciendo delete en alumnos id ${_id}`)
    } catch (error) {
        
    }
}
module.exports = {
    getAlumnos,
    postAlumnos,
    putAlumnos,
    patchAlumnos,
    deleteAlumnos,
    getAlumnosNombre,
    getAlumnosAprobado
}