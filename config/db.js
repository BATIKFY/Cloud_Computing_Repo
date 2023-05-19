require('dotenv').config()
const sequalize = require('sequelize')

const conn = new sequalize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{host:process.env.HOST,dialect:process.env.DIALECT})

module.exports = conn