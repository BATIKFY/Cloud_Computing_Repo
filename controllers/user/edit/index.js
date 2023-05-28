require('dotenv').config()
const userModel = require("../../../model/user")
const bycrpt = require('bcryptjs')


module.exports = {
    editUserProfile : async (req,res) =>{
        const {id} = req.params
        const {name,email} = req.body
        const editedUser = await userModel.update({name,email},{
            where:{
                id:id,
            }
        })
        if (!editedUser[0]) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to edit user, cant find the id",
                data: null
              });
        }else{
            return res.status(200).json({
                status: 200,
                success: true,
                message: "user updated",
                data: {
                    user: req.body,
                  }
              });
        }
    },
    forgotPassword : async (req,res) =>{
        const salt = 10
        const {id} = req.params
        let {password} = req.body
        password = bycrpt.hashSync(password,salt)
        const editedUser = await userModel.update({password},{
            where:{
                id:id,
            }
        });
        if (!editedUser[0]) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to edit user, cant find the id",
                data: null
              });
        }else{
            return res.status(200).json({
                status: 200,
                success: true,
                message: "user updated",
                data: {
                    user: req.body,
                  }
              });
        }
    }
}