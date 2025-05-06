console.clear()
console.log('Haciendo api4')

const express= require ('express')
const {getAlumnos, postAlumnos} = require('./controller')

const app = express()
    app.get('alumnos', getAlumnos)
    app.post('alumnos', postAlumnos)



app.listen(3000, ()=> console.log('Iniciando api rest 4'))