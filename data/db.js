const {Sequelize} = require ("sequelize")


/* nombre de la base datos - user - contraseña - {donde esta alojada la bd?, lenguaje,puerto} */
const db = new Sequelize ("g14music_instrumentos","g14music","gs9_3-3S*!LdTdt",{
    host: "mysql-g14music.alwaysdata.net",
    dialect:"mysql",
    port:3306
})
module.exports = db