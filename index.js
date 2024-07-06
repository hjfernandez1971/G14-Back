const express = require ("express")
const app = express()
const port = 8100
const cors = require ("cors")
const contactosRouter = require ("./routes/contactosRouter.js")
const provinciasRouter = require ("./routes/provinciasRouter.js")
const db = require ("./data/db.js")

app.use(cors())
app.use(express.json()) //  analizados en formato req.body

    /* PEDIDO HTTP/RUTA - FUNCION = CONTROLER     */
app.get ("/",(req,res)=>{
res.send ("estas en el home")
}) // sin modularizar

app.use ("/contactos",contactosRouter)
app.use ("/provincias",provinciasRouter)
//conexion a la base de datos
const conexionDB = async ()=>{
    try {
    await db.authenticate()
    console.log(`conectado ok a la base de datos`);
    } catch (error) {
        console.log(`el error es : ${error}`);
    }
}

app.listen (port,()=>{
    conexionDB()
    console.log(`servidor OK en el puerto ${port}`);
})

