const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const HeroModel = require("../model/HeroModel");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');
const path = require("path");

// Image CURD route path
const uploadsPath = path.join(__dirname, '../uploads/');

exports.createHeroBanner = catchAsyncError(async (req, res, next) => {
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
              
              const hero = await HeroModel.create(
                images.map((img) => ({
                   image:`banner/${img}`, // Pass the array of image objects
                   createdby:[createdByUser],
                }))
             );
          
          res.status(201).json({
            success: true,
            hero,
            message: "Successfully! Images created",
          });
        } catch (error) {
          return next(new ErrorHandler(error.message, 400));
        }
      });
      

// load All-Hero 
exports.getallHero = catchAsyncError(async (req, res, next) => {
  const hero = await HeroModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    hero,
  });
});

// delete Single-Hero Banner Image
exports.deleteHeroBanner = catchAsyncError(async (req,res,next) => {
  try {
    let hero = await HeroModel.findById(req.params.id);
    if(!hero){
      return next(new ErrorHandler("Gallery not found ", 400));
    }

  // delete image from upload folder 
   const imagePath = path.join(uploadsPath, hero.image);
   if (fs.existsSync(imagePath)) {
     // delte image from upload folder
     fs.unlinkSync(imagePath);
   }
    await hero.deleteOne();

    res.status(200).json({
      success: true,
      message: 'banner deleted!',
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})