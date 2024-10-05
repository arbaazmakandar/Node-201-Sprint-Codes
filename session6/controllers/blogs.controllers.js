
const BlogService = require("../services/blog.service")
const BlogServiceInstance = new BlogService();

const createNewBlog = async(req,res)=>{

    try {
        // const newBlog = new Blog(req.body);
        // await newBlog.save();
        const newBlog = await BlogServiceInstance.create(req.body);
        res.status(201).send(newBlog);
    } catch (error) {
        if(error.code === 11000)
            return res.status(409).send({message: error.message})
        if(error.errors){
            return res.status(400).send({message: `${error}`})
        }
        res.status(500).send({message: `Something went wrong ${error}`})
    }
}
const getAllBlogs = async(req, res) =>{
    try {
        res.send(await BlogServiceInstance.getAll());
    } catch (error) {
        res.status(500).send({message: `Something went wrong ${error}`})
    }
}

const getBlogById = async(req,res) =>{
   res.send(req.blog);
}

const updateBlogById = async(req,res) =>{
    try {
        const updatedBlog = await BlogServiceInstance.updateById(req.params.blogId, req.body);
        res.send(updatedBlog);
        
    } catch (error) {
        res.status(500).send({message: `Something went wrong ${error}`})

    }
}
const deleteBlogById = async(req,res) =>{
    try {
        const deletedBlog = await BlogServiceInstance.deleteById(req.params.blogId);
        res.status(200).send({message:`Blog with blog id ${req.params.blogId} deleted sucessfully.`})

    } catch (error) {
        res.status(500).send({message: `Something went wrong ${error}`})

    }
}

const searchBlogs = async (req, res) =>{
    const {title, author} = req.query;

    const titleQuery = {title: {$regex: new RegExp(title),  $options: 'i' }};//Specifying the $eq operator is equivalent to using the form { field: <value> } except when the <value> is a regular expression
    const authorQuery = { author: {$elemMatch: {email:author} }}
    try {
        if(title && author){
            const result = await BlogServiceInstance.queryBlogs([ titleQuery, authorQuery]);
            return res.send(result);
        }
        if(title){
            const result = await BlogServiceInstance.queryBlogs([titleQuery]);
            return res.send(result);
        }
        if(author){
            const authorElement = await BlogServiceInstance.queryBlogs([authorQuery])
            return res.send(authorElement);
        }
    } catch (error) {
        res.status(500).send({message: `Something went wrong ${error}`})
    }
}





module.exports = {createNewBlog, getAllBlogs,getBlogById,updateBlogById,deleteBlogById, searchBlogs};