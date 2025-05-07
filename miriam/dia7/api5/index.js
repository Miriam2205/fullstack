console.clear()
console.log('Haciendo api5')

const express = require('express')
const { getAlumnos, postAlumnos, putAlumnos, patchAlumnos, deleteAlumnos } = require('./controller')

const app = express()

    app.get('/alumnos', getAlumnos)
    app.post('/alumnos', postAlumnos)
    app.put('/alumnos', putAlumnos)
    app.patch('/alumnos', patchAlumnos)
    app.delete('/alumnos', deleteAlumnos)


app.listen(3000, () => console.log('Iniciando api rest5'))