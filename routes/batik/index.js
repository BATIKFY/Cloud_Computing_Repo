const express = require('express')
const router = express.Router()
const {getAllbatik,postBatik} = require("../../controllers/batik")

router.get('/',getAllbatik)
router.post('/',postBatik)




module.exports = router