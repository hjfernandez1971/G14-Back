
const provinciasModel = require ("../models/provinciasModel.js")


/* C R U D */
/* create - read - update - delete */
// MOSTRAR TODOS LOS REGISTROS - READ - GET
const traerProvincias= async (req,res)=>{
    try {
        const provincias = await provinciasModel.findAll() //  metodo de sequelize
        res.json (provincias)
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* MOSTRAR UN REGISTRO  - READ - GET */
const traerUnProvincia= async (req,res)=>{
try {                                             /*  /2 */
    const provincia = await provinciasModel.findByPk(req.params.id)
    res.json(provincia)
} catch (error) {
    res.json({message:error.message}) 
}
}

/* CREAR UN REGISTRO - CREATE - POST */

const crearProvincia = async (req,res)=>{
    try {
        await provinciasModel.create(req.body)
res.json({"message": "Registro creado correctamente"})
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* ACTUALIZAR UN REGISTRO - UPDATE - PUT */

const actualizarProvincia = async (req,res) =>{
    try {
        await provinciasModel.update(req.body,{
            where :{id:req.params.id}
        })
        res.json({"message": "Registro actualizado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}

const borrarProvincia = async (req,res)=>{
    try {
        await provinciasModel.destroy({where :{id:req.params.id}})
        res.json({"message": "Provincia Borrada correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}


module.exports= {traerProvincias,traerUnProvincia,crearProvincia,actualizarProvincia,borrarProvincia }