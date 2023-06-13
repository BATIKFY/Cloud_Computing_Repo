const nanoid = require("nanoid")
const batikModel = require('../../model/batik')
const uploadImage = require("../../helper")
const { Sequelize } = require("sequelize")
const Op = Sequelize.Op


module.exports = {
    postBatik : async (req,res)=>{
        try {
            const myFile = req.file
            const url = await uploadImage(myFile)
            const id = nanoid(10)
            const {name, origin, meaning } = req.body;
            const batik = await batikModel.create({
                id,
                image:url,
                name,
                origin,
                meaning
            })

            return res.status(201).json({
                status  : res.statusCode,
                succses : true,
                message : 'new batik added',
                data : {
                    batik : batik
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
    },
    getAllbatik : async (req, res)=>{
        try {
            const batiks = await batikModel.findAll();
            return res.status(200).json({
                status: 200,
                success: true,
                message: "ok",
                data: {
                    batiks,
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
    getBatikbyId : async (req, res)=>{
        try {
            const {id} = req.params
            const theBatik = await batikModel.findOne({
                where:{
                    id: id
                }
            });

            if(!theBatik){
                
                return res.status(200).json({
                    status: 200,
                    success: false,
                    message: "failed to find batik, cant find the id",
                    data: null
                  });
            }else{
                return res.status(200).json({
                    status: 200,
                    success: true,
                    message: "batik find",
                    data: {
                        batik: theBatik,
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
    },
    deleteBatik : async (req, res) =>{
        try {
            const {id} = req.params;
            const deleteBatik = await batikModel.destroy({
                where :{
                    id: id
                }
            })
            if (!deleteBatik) {
                return res.status(200).json({
                    status: 200,
                    success: false,
                    message: "failed to delete batik, cant find the batik",
                    data: null
                  });
            }else{
                return res.status(200).json({
                    status: 200,
                    success: false,
                    message: "batik deleted successfully"
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
    },
    updateBatik : async (req,res)=>{
        try {
            const {id} = req.params
            const updatedBatik = await batikModel.update(req.body,{
                where:{
                    id:id
                }
            })
            if (!updatedBatik[0]) {
                return res.status(200).json({
                    status: 200,
                    success: false,
                    message: "failed to update batik, cant find the id",
                    data: null
                  });
            }else{
                return res.status(200).json({
                    status: 200,
                    success: true,
                    message: "batik updated",
                    data: {
                        batik: req.body,
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
    },
    getBatikKeyword : async (req,res)=>{
        try {
            const {keyword} = req.params
            const data = await batikModel.findAll({
                where :{
                    name : {[Op.like]: '%' + keyword + '%'}
                }
            });
            if(data.length <= 0){
                return res.status(200).json({
                    status: 200,
                    success: false,
                    message: "failed to find batik, cant find the keyword",
                    data: null
                  });
            }else{
                return res.status(200).json({
                    status: 200,
                    success: true,
                    message: "batik find",
                    data: {
                        batik: data,
                      }
                  });
            }

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: 500,
                success: false,
                message: "internal server error",
                data: null
                });
        }
    }
}