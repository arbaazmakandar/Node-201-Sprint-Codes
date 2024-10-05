const router = require('express').Router();
const {createNewBlog, getAllBlogs,getBlogById,updateBlogById,deleteBlogById} = require('../controllers/blogs.controllers.js')
const {blogIdValidator} = require("../middlewares/validator.js")
const {findAndAttachBlog} = require("../middlewares/findAndAttachBlog")

router.post("/new",createNewBlog);
router.get("/",getAllBlogs);

router.route("/:blogId")
      .all(findAndAttachBlog)
      .get(getBlogById)
      .patch(updateBlogById)
      .delete(deleteBlogById)

// router.get("/:blogId",blogIdValidator,getBlogById);
// router.patch("/:blogId",updateBlogById);



module.exports = router;