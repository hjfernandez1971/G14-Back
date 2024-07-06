const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const provinciasModel = db.define ("provincias",{
    nombre:{type:DataTypes.STRING},
})
module.exports = provinciasModel