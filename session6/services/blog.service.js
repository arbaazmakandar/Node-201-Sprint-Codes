
//import blogsModel

const Blog = require('../models/blogs.model')

class BlogService {
 create = (payload) => Blog.create(payload);
 getAll = () => Blog.find({});
 getById = (blogId) =>Blog.findById(blogId);
 updateById = (blogId, payload) => Blog.findByIdAndUpdate(blogId, payload , {new:true});
 deleteById = (blogId) => Blog.findByIdAndDelete(blogId);
 queryBlogs = (queries) => Blog.find({$and : queries})
}
module.exports = BlogService;