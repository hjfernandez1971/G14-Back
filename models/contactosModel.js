const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const contactosModel = db.define ("contactos",{
    nombre:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},
    mail:{type:DataTypes.STRING},
    provincia:{type:DataTypes.INTEGER}
})
module.exports = contactosModel