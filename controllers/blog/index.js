module.exports = {
    getAllblog : (req,res)=>{
        res.json({
            message:"berhasil get blog",
            status:res.statusCode
        })

    }
}