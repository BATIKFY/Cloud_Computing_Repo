var express = require('express');
const router = express.Router()
const {registerUser} = require('../../controllers/user/register')
const {getAllUser,getUserById,loginUser} = require('../../controllers/user/login')
const {editUserProfile,forgotPassword} = require('../../controllers/user/edit')

router.post('/login',loginUser)
router.post('/register',registerUser)
router.get('/:id',getUserById)
router.get('/',getAllUser)
router.put('/profile/:id',editUserProfile)
router.put('/password/:id',forgotPassword)

// router.use('/signup')


module.exports = router