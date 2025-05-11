getAlumnos = (req, res, next)=> {
    try {
        res.json(`Haciendo get en /alumnos`)
    } catch (error) {
        next(error)
    }
}
getAlumnosById = (req, res, next)=> {
    try {
        const {_id}= req.params
        res.json(`Buscando mediante id ${_id}`)
    } catch (error) {
        next(error)
    }
}
getAlumnosByNombre = (req, res, next)=> {
    try {
        const {nombre}= req.params
        res.json(`Buscando al alumno con nombre ${nombre}`)
    } catch (error) {
        next(error)
    }
}
getAlumnosByAprobado = (req, res, next)=> {
    try {
        const {aprobado} = req.params
        res.json(`Buscando alumnos aprobado ${aprobado}`)
    } catch (error) {
        
    }
}
getAlumnosByNombreAndAprobado = (req, res, next)=>{
    try {
        const {nombre, aprobado} = req.params
        res.json(`Buscando nombre${nombre} y aprobado${aprobado}`)
    } catch (error) {
        next(error)
    }
}

postAlumnos = (req, res, next)=> {
    try {
        const {nombre, edad, curso} = req.body
       res.json(`Añadiendo al alumno ${nombre}, de edad ${edad} y que estudia ${curso}`) 
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



