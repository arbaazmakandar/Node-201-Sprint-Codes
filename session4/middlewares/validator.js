

const queryValidator = (schema) =>  (req,res,next) =>{
    const {error} = schema.validate(req.query);
    if(error){
        return res.status(422).send({message: error})
    }
    next();
}

module.exports = queryValidator;



