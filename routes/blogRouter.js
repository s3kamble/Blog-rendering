const {Router} = require('express');
const multipart = require('connect-multiparty');
const { getAllBlogs, createBlog, deleteBlog, updateBlog, getBlogById } = require('../controllers/blogController');
const {cloudinaryConfig} = require("../config/cloudinaryConfig")
const {multerUploads} = require("../controllers/multerImageController")

const router = Router();
router.use('*', cloudinaryConfig);
const multipartMiddleware = multipart();

router.route("/").get(getAllBlogs).post(multerUploads, createBlog)
router.route("/:blogId").get(getBlogById).delete(deleteBlog).put(multerUploads,updateBlog)

module.exports = router;