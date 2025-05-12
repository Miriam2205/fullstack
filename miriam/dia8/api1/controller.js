const getAlumnos = (req, res, next)=> {
    try {
        res.status(200).json(`Haciendo get en /alumnos`)
    } catch (error) {
        next(error)
    }
}
const getAlumnosById = (req, res, next)=> {
    try {
        const {_id}= req.params
        res.status(200).json({message: `Buscando mediante _id ${_id}`, data: []})
    } catch (error) {
        next(error)
    }
}
const getAlumnosByNombre = (req, res, next)=> {
    try {
        const {nombre}= req.params
        res.status(200).json({message: `Buscando nombre que ${nombre}`, data: []})
    } catch (error) {
        next(error)
    }
}
const getAlumnosByAprobado = (req, res, next)=> {
    try {
        const {aprobado} = req.params
        res.status(200).json({message: `Buscando aprobados ${aprobado}`, data: []})
    } catch (error) {
        
    }
}
const getAlumnosByNombreAndAprobado = (req, res, next)=>{
    try {
        const {nombre, aprobado} = req.params
        res.status(200).json({message: `Buscando nombre ${nombre } y aprobado${aprobado}`, data: []})
    } catch (error) {
        next(error)
    }
}

const postAlumnos = (req, res, next)=> {
    try {
        const {nombre, edad, curso} = req.body
       res.status(201).json({message: `Buscando nombre ${nombre} con edad ${edad } y que estudia ${curso}`, data: []}) 
    } catch (error) {
        next(error)
    }
}
const putAlumnos = (req, res, next)=>{
    try {
        const {_id, ...datos}= req.body
        res.json(datos)
    } catch (error) {
        next(error)
    }
}
const patchAumnos=(req, res,next)=>{
    try {
        const {_id, ...datos} = req.body
        res.json(datos)
    } catch (error) {
        next(error)
    }
}
const deleteAlumnos = (req, res,next)=> {
    try {
        const {_id}= req.params
        res.json(`Haciendo delete en /alumnos con el id ${_id}`)
    } catch (error) {
        next(error)
    }
}
module.exports ={
    getAlumnos,
    getAlumnosById,
    getAlumnosByNombre,
    getAlumnosByAprobado,
    getAlumnosByNombreAndAprobado,
    deleteAlumnos,
    postAlumnos,
    putAlumnos,
    patchAumnos,
    
}



