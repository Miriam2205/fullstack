
//METODO GET
const getAlumnos = ( req, res, next ) => {
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
    try {
        const { _nombre , _aprobado } = req.params
        res.json(`Buscando multiple ${_nombre} y ${_aprobado}`)
    } catch (error) {
        next(Error)
    }
    
}

//METODO POST
const postAlumnos = (req, res, next ) => {
    try {
        res.json(`Añadiendo post en alumnos`)
    } catch (error) {
        next(Error)
    }
}
//Buscar por id
const postAlumnosById = (req, res, next) => {
    try {
        const {_id} = req.params
        res.json(`Añadiendo post en alumnos ${_id}`)
    } catch (error) {
        next(Error)
    }
   
}
//Buscar por nombre 
const postAlumnosNombre = (req, res, next) => {
    try {
        const {_nombre} = req.params
        res.json(`Buscando nombre alumno ${_nombre}`)
    } catch (error) {
        next(Error)
    }
   
}
//Buscar por aprobado 
const postAlumnosAprobado = (req, res, next) => {
    try {
        const{_aprobado} = req.params
        res.json(`Buscando aprobados ${_aprobado}`)
    } catch (error) {
        next(Error)
    }
    
}
//Buscamos por nombre y aprobado
const postAlumnosByNombreAndAprobado = (req, res, next) => {
    try {
        const {_nombre, _aprobado} = req.params
        res.json(`Buscando nombres${_nombre} y aprobados${_aprobado} `)
    } catch (error) {
        next(Error)
    }

}


//METODO POST
//Buscar alumnos
const putAlumnos = (req, res, next) => {
    try {
        res.json(`Buscando alumnos `)
    } catch (error) {
        next(Error)
    }
}
//Buscamos por id
const putAlumnosById = (req, res, next) => {
    try {
        const {_id} = req.params
        res.json(`Buscando alumnos por Id ${_id}`)
    } catch (error) {
        next(Error)
    }

}
//Buscamos por nombre
const putAlumnosNombre = (req, res, next) => {
    try {
        const {_nombre} = req.params
        res.json(`Buscando nombre${_nombre}`)
    } catch (error) {
        next(Error)
    }

}
//Buscamos por aprobado
const putAlumnosAprobado = (req, res, next) => {
    try {
        const {_aprobado} = req.params
        res.json (`Buscando aprobados${_aprobado}`)
    } catch (error) {
        next(Error)
    }

}
//Buscamos por Nombre y aprobado
const putAlumnosByNombreAndAprobado = (req, res, next) => {
    try {
        const{_nombre, _aprobado} = req.params
        res.json(`Buscando nombres ${_nombre} y aprobados ${_aprobado} `)
    } catch (error) {
        next(Error)
    }
}


//METODO PATCH
const patchAlumnos = (req, res, next) => {
    try {
        res.json('Bucando alumnos')
    } catch (error) {
        next(Error)
    }
}
const patchAlumnosById = (req, res, next) => {
    try {
        const {_id} = req.params
        res.json(`Buscando id ${_id}`)
    } catch (error) {
        next(Error)
    }
    
}
const patchAlumnosNombre = (req, res, next) => {
    try {
        const {_nombre} = req.params
        res.json(`Buscando Nombre ${_nombre}`)
    } catch (error) {
        next(Error)
    }

}
const patchAlumnosAprobado = (req, res, next) => {
    try {
        const{_aprobado} = req.params
        res.json(`Buscando alumnos aprobados ${_aprobado}`)
    } catch (error) {
        next(Error)
    }
}

const patchAlumnosByNombreAndAprobado = (req, res, next) => {
   try {
        const {_nombre, _aprobado} = req.params
        res.json(`Buscando nombre ${_nombre} y aprobados ${_aprobado}`)
   } catch (error) {
        next(Error)
   }

}

//METODO DELETE
const deleteAlumnos = (req, res, next) => {
    try {
        res.json(`Buscamos alumnos`)
    } catch (error) {
        next(Error)
    }
}
const deleteAlumnosById = (req, res, next) => {
    try {
        const {_id} = req.params
        res.json(`Buscando el id ${_id} `)
    } catch (error) {
        next(Error)
    }

}

const deleteAlumnosNombres = (req, res, next) => {
    try {
        const {_nombre} = req.params
        res.json(`Buscar nombre de alumnos ${_nombre}`)
    } catch (error) {
        next(Error)
    }

}
const deleteAlumnosAprobado = (req, res, next) => {
    try {
        const {_aprobado} = req.params
        res.json(`Buscando alumnos aprobados ${_aprobado}`)
    } catch (error) {
        next(Error)
    }

}
const deleteAlumnosByNombreAndAprobado = (req, res, next) => {
    try {
        const {_nombre, _aprobado} = req.params
        res.json(`Buscando nombres ${_nombre} y aprobados ${_aprobado} `)
    } catch (error) {
        next(Error)
    }

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