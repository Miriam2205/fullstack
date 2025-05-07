
//METODO GET
const getAlumnos = ( error, req, res, next ) => {
    try {
        res.json('Haciendo get en /alumnos')
    } catch (error) {
        next(Error)
    }
}

    //Buscar mediante id
const getAlumnosById = (req, res, next) => {
    try {
        const { _id } = req.params
        res.json(`Buscando mediante el ID ${_id}`)
    } catch (error) {
        next(Error)
    }
    
}

    //Buscar mediante nombre 
const getAlumnosNombre = (req, res, next) => {
    try {
        const {_nombre} = req.params
        res.json(`Buscando mediante nombre ${_nombre}`)
    } catch (error) {
        next(Error)
    }
    
}
    //Buscar mediante aprobado
const getAlumnosAprobado = (req, res, next ) => {
    try {
        const {_aprobado} = req.params
        res.json(`Buscando aprobados ${_aprobado}`)
    } catch (error) {
        next(Error)
    }
}

    //Buscar valor múltiple:  nombre y aprobado
const getAlumnosByNombreAndAprobado = (req, res, next) => {
    const { _nombre , _aprobado } = req.params
    res.json(`Buscando multiple ${_nombre} y ${_aprobado}`)
}

//METODO POST
const postAlumnos = (req, res, next ) => {
    res.json(`Añadiendo post en alumnos`)
}
//Buscar por id
const postAlumnosById = (req, res, next) => {
    const {_id} = req.params
    res.json(`Añadiendo post en alumnos ${_id}`)
}
//Buscar por nombre 
const postAlumnosNombre = (req, res, next) => {
    const {_nombre} = req.params
    res.json(`Buscando nombre alumno ${_nombre}`)
}
//Buscar por aprobado 
const postAlumnosAprobado = (req, res, next) => {
    const{_aprobado} = req.params
    res.json(`Buscando aprobados ${_aprobado}`)
}
//Buscamos por nombre y aprobado
const postAlumnosByNombreAndAprobado = (req, res, next) => {
    const {_nombre, _aprobado} = req.params
    res.json(`Buscando nombres${_nombre} y aprobados${_aprobado} `)
}


//METODO POST
//Buscar alumnos
const putAlumnos = (req, res, next) => {
    res.json(`Buscando alumnos `)
}
//Buscamos por id
const putAlumnosById = (req, res, next) => {
    const {_id} = req.params
    res.json(`Buscando alumnos por Id ${_id}`)
}
//Buscamos por nombre
const putAlumnosNombre = (req, res, next) => {
    const {_nombre} = req.params
    res.json(`Buscando nombre${_nombre}`)
}
//Buscamos por aprobado
const putAlumnosAprobado = (req, res, next) => {
    const {_aprobado} = req.params
    res.json (`Buscando aprobados${_aprobado}`)
}
//Buscamos por Nombre y aprobado
const putAlumnosByNombreAndAprobado = (req, res, next) => {
    res.json(`Buscando nombres y aprobados `)
}



//METODO PATCH
const patchAlumnos = (req, res, next) => {
    res.json('Bucando alumnos')
}
const patchAlumnosById = (req, res, next) => {
    const {_id} = req.params
    res.json(`Buscando id ${_id}`)
}
const patchAlumnosNombre = (req, res, next) => {
    const {_nombre} = req.params
    res.json(`Buscando Nombre ${_nombre}`)
}
const patchAlumnosAprobado = (req, res, next) => {
    const {_aprobado} = req.parms
    res.json(`Buscando aprobados ${_aprobado}`)
}
const patchAlumnosByNombreAndAprobado = (req, res, next) => {
    const {_nombre, _aprobado} = req.parms
    res.json(`Buscando Nombre ${_nombre} y aprobados ${_aprobado}`)
}

//METODO DELETE
const deleteAlumnos = (req, res, next) => {
    res.json(`Buscamos alumnos`)
}
const deleteAlumnosById = (req, res, next) => {
    const {_id} = req.params
    res.json(`Buscando el id ${_id} `)
}

const deleteAlumnosNombres = (req, res, next) => {
    const {_nombre} = req.params
    res.json(`Buscar nombre de alumnos ${_nombre}`)
}
const deleteAlumnosAprobado = (req, res, next) => {
    const {_aprobado} = req.params
    res.json(`Buscando alumnos aprobados ${_aprobado}`)
}
const deleteAlumnosByNombreAndAprobado = (req, res, next) => {
    const {_nombre, _aprobado} = req.params
    res.json(`Buscando nombres ${_nombre} y aprobados ${_aprobado} `)
}

module.exports = {
    getAlumnos,
    getAlumnosById,
    getAlumnosNombre,
    getAlumnosAprobado,
    getAlumnosByNombreAndAprobado,
    postAlumnos,
    postAlumnosById,
    postAlumnosNombre,
    postAlumnosAprobado,
    postAlumnosByNombreAndAprobado,
    putAlumnos,
    putAlumnosById,
    putAlumnosNombre,
    putAlumnosAprobado,
    putAlumnosByNombreAndAprobado,
    patchAlumnos,
    patchAlumnosById,
    patchAlumnosNombre,
    patchAlumnosAprobado,
    patchAlumnosByNombreAndAprobado,
    deleteAlumnos,
    deleteAlumnosById,
    deleteAlumnosNombres,
    deleteAlumnosAprobado,
    deleteAlumnosByNombreAndAprobado
}