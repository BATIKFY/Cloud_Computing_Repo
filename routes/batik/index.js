const express = require('express')
const router = express.Router()
const {getAllBatik} = require("../../controllers/batik")


router.get('/',getAllBatik)




module.exports = router