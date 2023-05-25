const db = require('../config/db')
const Sequelize= require("sequelize")

const user = db.define('user',{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    }
})

module.exports = user