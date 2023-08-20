const express = require("express");
const {
        createBlog, getallBlogs,
        deleteBlog, updateBlog        
} = require("../controller/BlogController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();
const path = require("path");
const MulterUploads = require("../utils/MulterUploads");

// image storeage route path
const uploadsPath = path.join(__dirname, '../uploads/blog');
const upload = MulterUploads(uploadsPath)


router.route("/allBlogs").get(getallBlogs);

router.route("/createblog").post(isAuthenticatedUser,upload.single('file'),createBlog);

router
  .route("/deleteblog/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"), deleteBlog);

router
  .route("/updateblog/:id")
  .put(isAuthenticatedUser, isAdmin("admin"), upload.single('file'),updateBlog);



module.exports = router;
