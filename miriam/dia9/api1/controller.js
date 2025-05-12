
const {Alumno} = require ('./models')



const getAlumnos = async (req, res, next)=> {
    try {
        const buscar = await Alumno.find()
        res.status(200).json({status : 200, message: `Buscando a todos los alumnos`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const getAlumnosById = async (req, res, next)=> {
    try {
        const {_id} = req.params
        const buscar = await Alumno.findById(_id)
        res.status(200).json({message: `Buscando mediante _id ${_id}`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const getAlumnosByNombre = async (req, res, next)=> {
    try {
        const {nombre}= req.params
        const buscar = await Alumno.find({nombre: nombre})
        res.status(200).json({message: `Buscando nombre que ${nombre}`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const getAlumnosByAprobado = async (req, res, next)=> {
    try {
        const {aprobado} = req.params
        const buscar = await Alumno.find({aprobado: Boolean (aprobado)})
        res.status(200).json({message: `Buscando aprobados ${aprobado}`, data: buscar})
    } catch (error) {
        
    }
}
const getAlumnosByNombreAndAprobado = async (req, res, next)=>{
    try {
        const {nombre, aprobado} = req.params
        const buscar = await Alumno.find({nombre: nombre, aprobado: Boolean(aprobado)})
        res.status(200).json({message: `Buscando nombre ${nombre } y aprobado${aprobado}`, data: buscar})
    } catch (error) {
        next(error)
    }
}

const postAlumnos = async (req, res, next)=> {
    try {
        const {nombre, edad, curso } = req.body
        const nuevo = new Alumno ({
            nombre: nombre,
            edad: edad,
            curso: curso,
            
        })
        await nuevo.save()
        const buscar = await Alumno.find()//Volvemos a buscar todos una vez que hemos añadido uno nuevo

       res.status(201).json({message: `He añadido un nuevo alumno`, data: buscar}) 
    } catch (error) {
        next(error)
    }
}
const putAlumnos = async (req, res, next)=>{
    try {
        const {_id, ...datos}= req.body
        const actualizar = await Alumno.findByIdAndUpdate(_id, datos)
        const buscar = await Alumno.find()

        res.status(200).json({message: `Actualizando al alumnos con el id ${_id}`, data: buscar})
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
const deleteAlumnos = async (req, res,next)=> {
    try {
        const {_id}= req.params
        const eliminar = await Alumno.findByIdAndDelete(_id)
        const buscar = await Alumno.find()

        res.status(200).json({message: `Eliminando almalumnos con el id ${_id}}`, data: buscar })
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



