
const express = require ("express")
const router= express.Router()

const {traerContactos,traerUnContacto,crearContacto,actualizarContacto,borrarContacto } = require ("../controllers/contactosControllers.js")

router.get ("/",traerContactos) 
router.get ("/:id",traerUnContacto)
router.post ("/",crearContacto) 
router.put ("/:id",actualizarContacto ) 
router.delete ("/:id",borrarContacto)
                    module.exports= router