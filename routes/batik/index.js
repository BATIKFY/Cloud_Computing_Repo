const express = require('express')
const router = express.Router()
const {getAllbatik,postBatik,getBatikbyId,deleteBatik,updateBatik} = require("../../controllers/batik")

router.get('/',getAllbatik)
router.post('/',postBatik)
router.get('/:id',getBatikbyId)
router.put('/:id',updateBatik)
router.delete('/:id',deleteBatik)





module.exports = router