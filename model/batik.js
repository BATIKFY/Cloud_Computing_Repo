const db = require('../config/db')
const Sequelize= require("sequelize")

const batik = db.define("batik",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING
    },
    origin:{
        type: Sequelize.STRING
    },
    meaning:{
        type: Sequelize.STRING(1234) 
    }
})

module.exports = batik

