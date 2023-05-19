require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const allRoute = require('./routes')
const db = require('./config/db');
const batik = require('./model/batik');
// const sequalize = require('sequelize');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(allRoute)


db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    db.sync().then(() => {
        console.log('Batik table created successfully!');
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


app.get('/',(req,res)=>{
    res.json({
        name:"daffa",
        passwod:"123"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`server running in port ${process.env.PORT}`)
})

module.exports = app;
