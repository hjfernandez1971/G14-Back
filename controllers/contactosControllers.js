
const contactosModel = require ("../models/contactosModel.js")


/* C R U D */
/* create - read - update - delete */
// MOSTRAR TODOS LOS REGISTROS - READ - GET
const traerContactos= async (req,res)=>{
    try {
        const contactos = await contactosModel.findAll() //  metodo de sequelize
        res.json (contactos)
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* MOSTRAR UN REGISTRO  - READ - GET */
const traerUnContacto= async (req,res)=>{
try {                                             /*  /2 */
    const contacto = await contactosModel.findByPk(req.params.id)
    res.json(contacto)
} catch (error) {
    res.json({message:error.message}) 
}
}

/* CREAR UN REGISTRO - CREATE - POST */

const crearContacto = async (req,res)=>{
    try {
        await contactosModel.create(req.body)
res.json({"message": "Registro creado correctamente"})
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* ACTUALIZAR UN REGISTRO - UPDATE - PUT */

const actualizarContacto = async (req,res) =>{
    try {
        await contactosModel.update(req.body,{
            where :{id:req.params.id}
        })
        res.json({"message": "Registro actualizado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}

const borrarContacto = async (req,res)=>{
    try {
        await contactosModel.destroy({where :{id:req.params.id}})
        res.json({"message": "contacto Borrado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}


module.exports= {traerContactos,traerUnContacto,crearContacto,actualizarContacto,borrarContacto }