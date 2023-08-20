const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const GalleryModel = require("../model/GalleryModel");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("cloudinary").v2;



// // Profile Picture in Cloudinary
cloudinary.config({
  cloud_name: "dzo85iqic",
  api_key: "846153654198125",
  api_secret: "DNjYXnbdCyJoNlLHajLCWU1Sj5E",
});
exports.createImage = catchAsyncError(async (req, res, next) => {
        try {
          if (!req.files || (Array.isArray(req.files.file) && req.files.file.length === 0)) {
            return next(new ErrorHandler("No Files Received", 400));
          }
          
          // Convert to array if req.files is a single object
          const filesArray = Array.isArray(req.files.file) ? req.files.file : [req.files.file];
          
          // Upload each file image to Cloudinary
          const images = [];
          for (const file of filesArray) {
            const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
              folder: "Gallery", 
              quality: "auto:low",
            });

            images.push({ public_id: uploadResult.public_id, url: uploadResult.secure_url });
        }
          
            const createdByUser = {
                user: req.user._id,
                name: req.user.name,
                image: req.user.avatar.url || "user",
              };
              
              const Gallerys = await GalleryModel.create(
                images.map((img) => ({
                   image:img, // Pass the array of image objects
                   createdby:[createdByUser],
                }))
             );
          
          res.status(201).json({
            success: true,
            images: Gallerys,
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

    const currentPublicId = image.image.public_id;
  
    // Remove the current image from Cloudinary
    if (currentPublicId) {
      await cloudinary.uploader.destroy(currentPublicId);
    }
    await image.deleteOne();

    res.status(200).json({
      success: true,
      message: 'image deleted!',
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})