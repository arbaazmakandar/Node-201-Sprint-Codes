const authorize = (req,res,next)=>{
    if(req.headers.authorization !== process.env.password)    
        return res.status(401).send({message:"You are not authorized to view the resource"})
    next();
}


module.exports = authorize;