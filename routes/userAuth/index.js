var express = require('express');
const router = express.Router()
const {registerUser} = require('../../controllers/user/register')
const {getAllUser,getUserById,loginUser} = require('../../controllers/user/login')

router.post('/login',loginUser)
router.post('/register',registerUser)
router.get('/:id',getUserById)
router.get('/',getAllUser)
// router.use('/signup')


module.exports = router