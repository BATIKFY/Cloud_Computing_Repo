const express = require('express')
const router = express.Router()
const {getAllblog,postBlog,getBlogbyId} = require("../../controllers/blog")


router.get('/',getAllblog)
router.get('/:id',getBlogbyId)
router.post('/',postBlog)





module.exports = router