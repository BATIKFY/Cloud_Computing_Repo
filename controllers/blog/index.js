const nanoid = require("nanoid")
const blogModel = require("../../model/blog")
const uploadImage = require("../../helper")
module.exports = {
    getAllblog : async (req,res)=>{
        try {
            const blog = await blogModel.findAll();
            return res.status(200).json({
                status:200,
                success: true,
                message:"ok",
                data: {
                    blog,
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
    postBlog : async (req, res)=>{
        try {
            const myFile = req.file
            const url = await uploadImage(myFile)
            const id = nanoid(10)
            const {title,textBlog,source} = req.body
            const blog = await blogModel.create({
                id,
                image : url,
                title,
                textBlog,
                source
            })  

            return res.status(201).json({
                status  : res.statusCode,
                succses : true,
                message : 'new blog posted',
                data : {
                    blog,
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
    getBlogbyId : async (req,res) =>{
       try {
        const {id} = req.params
        const theBlog = await blogModel.findOne({
            where:{
                id:id
            }
        });

        if (!theBlog) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to find blog, cant find the id",
                data: null
              });
        }else{
            return res.status(200).json({
                status: 200,
                success: true,
                message: "found blog",
                data: {
                    blog: theBlog,
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
    updateBlog : async (req,res) => {
        try {
           const {id} = req.params
           const updatedBlog = await blogModel.update(req.body,{
            where:{
                id:id,
            }
           }) 
           if (!updatedBlog[0]) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to update blog, cant find the id",
                data: null
              });
           }else{
            return res.status(200).json({
                status: 200,
                success: true,
                message: "blog updated",
                data: {
                    blog: req.body,
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
    deleteBlog : async (req, res)=>{
        try {
            const {id} =  req.params
            const deleteBlog = await blogModel.destroy({
                where:{
                    id:id
                }
            })
            if (!deleteBlog) {
                return res.status(200).json({
                    status: 200,
                    success: false,
                    message: "failed to delete blog, cant find the batik",
                    data: null
                  });                
            }else{
                return res.status(200).json({
                    status: 200,
                    success: false,
                    message: "blog deleted successfully"
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