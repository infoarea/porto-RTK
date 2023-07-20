
//Create Error Handler
export const errorHandler = ( error, req, res, next) =>{

    const errmessage = error.message || "Unkown Error"
    const errstatus = error.status || 400;
   return res.status(errstatus).json({
        message : errmessage,
        status : errstatus,
        stack : error.stack,
    })
}   