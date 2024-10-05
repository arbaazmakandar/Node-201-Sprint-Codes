

const queryValidator = (schema) =>  (req,res,next) =>{
    const {error} = schema.validate(req.query);
    if(error){
        return res.status(422).send({message: error})
    }
    next();
}

const blogIdValidator = (req,res,next) =>{
    const blogId = req.params.blogId;
    const validPattern = new RegExp(/[a-f0-9]{24}/)
    if(!validPattern.test(blogId)){
        return res.status(422).send({message:"Invalid Blog Id"});
    }
    next();

}


module.exports = {queryValidator, blogIdValidator};



