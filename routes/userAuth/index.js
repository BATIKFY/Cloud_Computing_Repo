var express = require('express');
const router = express.Router()
const {registerUser} = require('../../controllers/user/register')


router.post('/login',registerUser)
// router.use('/signup')


module.exports = router