//import blogsModel

const Blog = require('../models/blogs.model')

const createNewBlog = async(req,res)=>{

    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(201).send(newBlog);
    } catch (error) {
        if(error.code === 11000)
            return res.status(409).send({message:"A blog with this title already exists."})
        if(error.errors){
            return res.status(400).send({message: `${error.errors.title}`})
        }
        res.status(500).send({message: `Something went wrong ${error}`})
    }
}
const getAllBlogs = async(req, res) =>{
    try {
        res.send(await Blog.find({}));
    } catch (error) {
        res.status(500).send({message: `Something went wrong ${error}`})
    }
}

const getBlogById = async(req,res) =>{
   res.send(req.blog);
}

const updateBlogById = async(req,res) =>{
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.blogId, req.body , {new:true});
        res.send(updatedBlog);
        
    } catch (error) {
        res.status(500).send({message: `Something went wrong ${error}`})

    }
}
const deleteBlogById = async(req,res) =>{
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.blogId);
        res.status(200).send({message:`Blog with blog id ${req.params.blogId} deleted sucessfully.`})

    } catch (error) {
        res.status(500).send({message: `Something went wrong ${error}`})

    }
}
module.exports = {createNewBlog, getAllBlogs,getBlogById,updateBlogById,deleteBlogById};