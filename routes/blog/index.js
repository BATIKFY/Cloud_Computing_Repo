const express = require('express')
const router = express.Router()
const {getAllblog,postBlog,getBlogbyId,updateBlog,deleteBlog, getBlogKeyword} = require("../../controllers/blog")


router.get('/',getAllblog)
router.get('/:id',getBlogbyId)
router.get('/find/:keyword',getBlogKeyword)
router.post('/',postBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)





module.exports = router