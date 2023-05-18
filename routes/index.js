var express = require('express');
var router = express.Router();
const batik = require('./batik')
const blog = require('./blog')

/* GET home page. */
router.use("/batik",batik)
router.use("/blog",blog)

module.exports = router;
