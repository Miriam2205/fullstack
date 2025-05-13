const {Personaje} = require('./schemas')

const getPersonajes = async(req, res, next)=> {
    try {
        
        const buscar = await Personaje.find()
        res.status(200).json({status: 200, message: `Buscando a todos los alumnos de harry potter`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const getPersonajesByNombre = async(req, res, next)=> {
    try {
        const {nombre} = req.params
        const buscar = await Personaje.find({nombre: nombre})
        res.status(200).json({status: 200, message: `Buscando personaje con nombre ${nombre}`, data: buscar })
    } catch (error) {
        next(error)
    }
}
const getPersonajesByCasa = async(req, res, next)=> {
    try {
        const {casa} = req.params
        const buscar = await Personaje.find({casa: casa})
        res.status(200).json({status: 200, message: `Buscando personaje de la casa ${casa}`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const getPersonajesVivos = async(req, res, next)=>{
    try {
        const {vivo} = req.params
        const buscar = await Personaje.find({vivo: Boolean (vivo)})
        res.status(200).json({status: 200, message: `Buscando personaje vivo ${vivo}`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const postPersonaje = async(req, res, next)=> {
    try {
        const {nombre, edad, casa, vivo } = req.body
        const nuevo = new Personaje ({
            nombre: nombre,
            casa: casa,
            edad: edad,
            vivo: true
        })
        const buscar = await Personaje.find()
        res.status(200).json({status: 200, message: `Publicando nuevo personaje `, data: buscar})
    } catch (error) {
        next(error)
    }
}
const putPersonaje = async(req, res, next)=> {
    try {
        const {_id, ...datos} = req.body
        const actualizar = await Personaje.findByIdAndUpdate(_id, datos)
        const buscar = await Personaje.find()
        res.status(200).json({status: 200, message: `Actualizando personaje con el id ${_id}`, data: buscar})
    } catch (error) {
        next(error)
    }
}

const deletePersonaje = async(req, res, next)=> {
    try {
        const {_id} = req.params
        const eliminar = await Personaje.findByIdAndDelete(_id)
        const buscar = await Personaje.find()
        res.status(200).json({status: 200, message: `Eliminado el personaje con id ${_id}`, data: buscar})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getPersonajes,
    getPersonajesByNombre,
    getPersonajesByCasa,
    getPersonajesVivos,
    postPersonaje,
    putPersonaje,
    deletePersonaje
}