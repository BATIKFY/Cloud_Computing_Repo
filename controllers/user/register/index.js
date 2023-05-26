require('dotenv').config()
const nanoid = require("nanoid")
const userModel = require("../../../model/user")
const bycrpt = require('bcryptjs')
module.exports = {
    registerUser : async (req,res)=>{
        try {
            const salt = 10
            const id = nanoid(10)
            const {username,password} = req.body
            const hashedPass = bycrpt.hashSync(password,salt)
            const user = await userModel.create({
                id,
                username,
                password : hashedPass
            })
            return res.status(201).json({
                status  : res.statusCode,
                succses : true,
                message : 'new user added',
                data : {
                    user,
                }
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
              status: 500,
              success: false,
              message: "internal server error",
              data: null
            });
        }
    }
}