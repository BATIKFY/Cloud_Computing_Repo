const nanoid = require("nanoid")
const blogModel = require("../../model/blog")
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
            const id = nanoid(10)
            const {title,textBlog,source} = req.body
            const blog = await blogModel.create({
                id,
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
    }
}