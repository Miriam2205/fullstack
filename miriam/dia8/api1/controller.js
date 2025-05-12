getAlumnos = (req, res, next)=> {
    try {
        res.status(200).json(`Haciendo get en /alumnos`)
    } catch (error) {
        next(error)
    }
}
getAlumnosById = (req, res, next)=> {
    try {
        const {_id}= req.params
        res.status(200).json({message: `Buscando mediante _id ${_id}`, data: []})
    } catch (error) {
        next(error)
    }
}
getAlumnosByNombre = (req, res, next)=> {
    try {
        const {nombre}= req.params
        res.status(200).json({message: `Buscando nombre que ${nombre}`, data: []})
    } catch (error) {
        next(error)
    }
}
getAlumnosByAprobado = (req, res, next)=> {
    try {
        const {aprobado} = req.params
        res.status(200).json({message: `Buscando aprobados ${aprobado}`, data: []})
    } catch (error) {
        
    }
}
getAlumnosByNombreAndAprobado = (req, res, next)=>{
    try {
        const {nombre, aprobado} = req.params
        res.status(200).json({message: `Buscando nombre ${nombre } y aprobado${aprobado}`, data: []})
    } catch (error) {
        next(error)
    }
}

postAlumnos = (req, res, next)=> {
    try {
        const {nombre, edad, curso} = req.body
       res.status(201).json({message: `Buscando nombre ${nombre} con edad ${edad } y que estudia ${curso}`, data: []}) 
    } catch (error) {
        next(error)
    }
}
putAlumnos = (req, res, next)=>{
    try {
        const {_id, ...datos}= req.body
        res.json(datos)
    } catch (error) {
        next(error)
    }
}
patchAumnos=(req, res,next)=>{
    try {
        const {_id, ...datos} = req.body
        res.json(datos)
    } catch (error) {
        next(error)
    }
}
deleteAlumnos = (req, res,next)=> {
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



