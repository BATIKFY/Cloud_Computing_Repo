module.exports = {
    getAllBatik : (req,res)=>{
        res.json({
            message:"berhasil get batik",
            status:res.statusCode
        })

    }
}