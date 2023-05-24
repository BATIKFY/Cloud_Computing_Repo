var express = require('express');
const router = express.Router()


router.get('/',(req,res)=>{
    res.json({
        name:"daffa",
        passwod:"123"
    })
})


module.exports = router