const Blog = require('../models/blogs.model')

const findAndAttachBlog = async(req,res,next) =>{
    try {
        const reqBlog = await Blog.findById(req.params.blogId);
        if(!reqBlog){
            return res.status(404).send({message: `Blog with ID:${req.params.blogId} cannot be found.`})
        }        
        req.blog = reqBlog;
        next();
    } catch (error) {
        res.status(500).send({message: `Something went wrong ${error}`})

    }

}
module.exports = {findAndAttachBlog};