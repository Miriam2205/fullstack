const {Pelicula} = require('./schemas')
const getPeliculas = async(req, res, next)=> {
    try {
        const buscar = await Pelicula.find()
        res.status(200).json({status: 2000, message: `Buscando todas las peliculas`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const getPeliculasById = async(req, res, next)=>{
    try {
        const {_id} = req.params
        const buscar = await Pelicula.findById(_id)
        res.status(200).json({status: 200, message: `Buscando peliculas por id${_id}`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const getPeliculasByGenero = async( req, res, next)=> {
    try {
        const {genero} = req.params
        const buscar = await Pelicula.find({genero: genero})
        res.status(200).json({status: 200, message: `Buscando peliculas por genero ${genero}`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const getPeliculasByDirector= async(req, res,next)=>{
try {
    const {director}=req.params
    const buscar = await Pelicula.find({director: director})
    res.status(200).json({status: 200, message: `Buscando peliclas por director ${director}`, data: buscar})
} catch (error) {
    next(error)
}
}
const getPeliculasByFecha= async(req, res,next)=>{
    try {
        const {fecha}= req.params
        const buscar = await Pelicula.find()
        res.status(200).json({status: 200, message: `Buscando peliculas por año ${fecha}`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const postPeliculas= async(req, res,next)=>{
    try {
        const {titulo, director, fecha, genero} = req.body
        const nuevo = new Pelicula ({
            titulo: titulo,
            director: director,
            fecha: fecha,
            genero: genero

        })
        const buscar = await Pelicula.find()
        res.status(200).json({status: 200, message: `Publicando nueva pelicula `, data: buscar})
    } catch (error) {
        next(error)
    }
}
const putPeliculas = async(req, res, next)=>{
    try {
        const buscar = {_id, ...datos}
        res.status(200).json({status: 200, message: `Actualizar una pelicula existente`, data: buscar})
    } catch (error) {
        next(error)
    }
}
const deletePeliculas = async(req, res, next)=> {
    try {
        res.status(200).json({status: 200, message: `Eliminar una película del array`, data: {_id}})
    } catch (error) {
        next(error)
    }
}
module.exports={
    getPeliculas,
    getPeliculasById,
    getPeliculasByGenero,
    getPeliculasByDirector,
    getPeliculasByFecha,
    postPeliculas,
    putPeliculas,
    deletePeliculas
}