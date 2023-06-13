var express = require('express');
var router = express.Router();
const batik = require('./batik')
const blog = require('./blog')
const userAuth = require('./userAuth')

/* GET home page. */
router.use("/batik",batik)
router.use("/blog",blog)
router.use('/auth',userAuth)

module.exports = router;
