const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const GalleryModel = require("../model/GalleryModel");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');
const path = require("path");

// Image CURD route path
const uploadsPath = path.join(__dirname, '../uploads/');

exports.createImage = catchAsyncError(async (req, res, next) => {
        try {
          if (!req.files ) {
            return next(new ErrorHandler("No Files Received", 400));
          }

          const images = [];
          for (const file of req.files) {     
            images.push(file.filename);
        }
            const createdByUser = {
                user: req.user._id,
                name: req.user.name,
                image: req.user.avatar || "nimg",
              };
              
              const Gallerys = await GalleryModel.create(
                images.map((img) => ({
                   image:`gallery/${img}`, // Pass the array of image objects
                   createdby:[createdByUser],
                }))
             );
          
          res.status(201).json({
            success: true,
            images: 'Gallerys',
            message: "Successfully! Images created",
          });
        } catch (error) {
          return next(new ErrorHandler(error.message, 400));
        }
      });
      

// load All-Gallerys 
exports.getallImages = catchAsyncError(async (req, res, next) => {
  const images = await GalleryModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    images,
  });
});

// delete Single-Gallery
exports.deleteImage = catchAsyncError(async (req,res,next) => {
  try {
    let image = await GalleryModel.findById(req.params.id);
    if(!image){
      return next(new ErrorHandler("Gallery not found ", 400));
    }

   
    // delete image from upload folder 
    const imagePath = path.join(uploadsPath, image.image);
    if (fs.existsSync(imagePath)) {
      // delte image from upload folder
      fs.unlinkSync(imagePath);
    }
    // delte image from database
    await image.deleteOne();

    res.status(200).json({
      success: true,
      message: 'image deleted!',
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})