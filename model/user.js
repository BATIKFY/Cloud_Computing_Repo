const db = require('../config/db')
const Sequelize= require("sequelize")

const user = db.define('user',{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    }
})

module.exports = user