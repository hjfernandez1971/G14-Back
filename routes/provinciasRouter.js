
const express = require ("express")
const router= express.Router()

const {traerProvincias,traerUnProvincia,crearProvincia,actualizarProvincia,borrarProvincia } = require ("../controllers/provinciasControllers.js")

router.get ("/",traerProvincias) 
router.get ("/:id",traerUnProvincia)
router.post ("/",crearProvincia) 
router.put ("/:id",actualizarProvincia ) 
router.delete ("/:id",borrarProvincia)
                    module.exports= router