const nanoid = require("nanoid")
const userModel = require("../../../model/user")
module.exports = {
    registerUser : async (req,res)=>{
        try {
            const id = nanoid(10)
            const {username,password} = req.body
            const user = await userModel.create({
                id,
                username,
                password
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