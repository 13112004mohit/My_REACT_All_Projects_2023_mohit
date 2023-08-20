const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const BlogModel = require("../model/BlogModel");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');
const path = require("path");

// Image CURD route path
const uploadsPath = path.join(__dirname, '../uploads/');


exports.createBlog = catchAsyncError(async (req, res, next) => {
        try {
          if (!req.file ||!req.file.filename) {
            return next(new ErrorHandler("No File Recived ", 400));
          }
          
          const image = req.file.filename;
            const { heading, category, description, mobileNumber } = req.body;


            const BlogData = new BlogModel({
              heading,
              category,
              description,
              image:`blog/${image}`,
              mobileNumber,
              createdby: [
                {
                  user: req.user._id, // Assuming you are using Passport or similar authentication middleware to get the user
                  name: req.user.name, // Set the name of the user who created the blog
                  image: req.user.avatar.url || 'user', // Set the image URL of the user who created the blog
                },
              ],
            });
            
            const blogs = await BlogModel.create(BlogData);
      
            res.status(201).json({
              success: true,
              blog: blogs,
              message:'successfully! blog created',
            });
          
        } catch (error) {
          return next(new ErrorHandler(error, 400));
        }
      });

// load All-Blogs 
exports.getallBlogs = catchAsyncError(async (req, res, next) => {
  const blogs = await BlogModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    blogs,
  });
});

// delete Single-Blog
exports.deleteBlog = catchAsyncError(async (req,res,next) => {
  try {
    let blog = await BlogModel.findById(req.params.id);
    if(!blog){
      return next(new ErrorHandler("blog not found ", 400));
    }

    // delete image from upload folder 
    const imagePath = path.join(uploadsPath, blog.image);
    fs.unlinkSync(imagePath);
    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Blog deleted!',
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})



// Update Blog
exports.updateBlog = catchAsyncError(async (req, res, next) => {
  let blog = await BlogModel.findById(req.params.id);
  
  if (!blog) {
    return next(new ErrorHandler("Data not found", 400));
  }
  
  const { heading, category, description, mobileNumber } = req.body;

    if (!req.file || !req.file.filename) {
      return next(new ErrorHandler("No File Recived", 400));
    }  
    const image = req.file.filename;  
    const oldImagePath = path.join(uploadsPath, blog.image);
    fs.unlinkSync(oldImagePath);

  const blogData = {
    heading, category, description, mobileNumber,
    image:`blog/${image}`,
  };
  await BlogModel.findByIdAndUpdate(req.params.id, blogData);



  res.status(201).json({
    success: true,
    message: "Blog Updated!",
  });
});
