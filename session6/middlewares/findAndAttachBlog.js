
const BlogService = require("../services/blog.service")
const BlogServiceInstance = new BlogService();

const findAndAttachBlog = async(req,res,next) =>{
    try {
        const reqBlog = await BlogServiceInstance.getById();
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