const express = require('express')
const router = express.Router()
const {getAllblog} = require("../../controllers/blog")


router.get('/',getAllblog)




module.exports = router