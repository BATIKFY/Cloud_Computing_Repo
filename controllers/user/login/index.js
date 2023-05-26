require('dotenv').config()
const nanoid = require("nanoid")
const userModel = require("../../../model/user")
const jwt = require('jsonwebtoken')
const bycrpt = require('bcryptjs')
const key = process.env.KEY_HASH
module.exports = {
    loginUser: async (req,res)=>{
        try {
            const {username,password} = req.body
            const user = await userModel.findOne({
                where :{
                    username : username,
                }
            });
            if (user != null) {
                if(bycrpt.compareSync(password,user.password)){
                    let token = {
                        id : user.id,
                        username : user.username
                    }
                    token = jwt.sign(token,key,{expiresIn:'1d'})
                    return res.status(200).json({
                        status:200,
                        success: true,
                        message:"login successful",
                        data: {
                            accessToken : token
                        }
                    })

                }
            }
                return res.status(404).json({
                    status: 404,
                    success: false,
                    message: "cant login",
                    data: null
                    });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: 500,
                success: false,
                message: "internal server error",
                data: null
                });
        }
    },
    getAllUser : async (req,res)=>{
        try {
            const users = await userModel.findAll();
            return res.status(200).json({
                status:200,
                success: true,
                message:"ok",
                data: {
                    users,
                }
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                success: false,
                message: "internal server error",
                data: null
                });
        }
    },
    getUserById : async (req,res)=>{
        try {
            const {id} = req.params;
            const theUser = await userModel.findOne({
                where : {
                    id: id,
                }
            });
            if (!theUser) {
                return res.status(200).json({
                    status: 200,
                    success: false,
                    message: "failed to find user, cant find the id",
                    data: null
                  });
            }else{
                return res.status(200).json({
                    status: 200,
                    success: true,
                    message: "found user",
                    data: {
                        user: theUser,
                      }
                  });
            }
        } catch (error) {
            return res.status(500).json({
                status: 500,
                success: false,
                message: "internal server error",
                data: null
                });
        }
    }
}