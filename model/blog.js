const db = require('../config/db')
const Sequelize= require("sequelize")

const blog = db.define('blog',{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING
    },
    textBlog:{
        type:Sequelize.TEXT('long')
    },
    source:{
        type:Sequelize.STRING
    }
})
module.exports = blog