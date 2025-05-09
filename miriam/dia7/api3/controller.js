
 const getAlumnos = (req, res, next) => {
    res.json('Haciendon get en /alumnos')
 }
 const postAlumnos = (req, res, next) => {
   res.json('Haciendon post en /alumnos')
 }
 const putAlumnos = (req, res, next) => {
   res.json('Haciendon put en /alumnos')
 }
 const patchAlumnos = (req, res, next) => {
   res.json('Haciendon patch en /alumnos')
   
 }
const deleteAlumnos = (req, res, next) => {
   res.json('Haciendon delete en /alumnos')

}
 module.exports ={
   getAlumnos,
   postAlumnos,
   putAlumnos, 
   patchAlumnos,
   deleteAlumnos
 }