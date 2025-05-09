console.clear()
console.log('Iniciando api3')


const express = require ( 'express')
const { getAlumnos, postAlumnos, putAlumnos, patchAlumnos, deleteAlumnos,  } = require('./controller')

const app = express()

    app.use(express.json())
    app.use(express.urlencoded({extendend: false}))

    app.get('/alumnos', getAlumnos)
    app.post('/alumnos', postAlumnos)
    app.put('/alumnos', putAlumnos)
    app.patch('/alumnos', patchAlumnos)
    app.delete('/alumnos', deleteAlumnos)




app.listen ( 3000, () => console.log('Express iniciada'))