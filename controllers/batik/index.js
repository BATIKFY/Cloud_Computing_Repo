const bookModel = require('../../model/batik')

module.exports = {
    postBatik : async (req,res)=>{
        try {
            const {name, origin, meaning } = req.body;
            const batik = await bookModel.create({
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
                },
                error : null
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
              status: 500,
              success: false,
              message: "internal server error",
              data: null,
              error: "Internal Server Error",
            });
            
        }
    },
    getAllbatik : async (req, res)=>{
        try {
            const batiks = await bookModel.findAll();
            return res.status(200).json({
                status: 200,
                success: true,
                message: "ok",
                data: {
                    batiks,
                },
                error: null
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error",
            });
        }
    }
}