const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const ServicesModel = require("../model/ServicesModel");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');
const path = require("path");


// Image CURD route path
const uploadsPath = path.join(__dirname, '../uploads/');



exports.createServices = catchAsyncError(async (req, res, next) => {  
         
          try {
            if (!req.file ||!req.file.filename) {
              return next(new ErrorHandler("No File Recived ", 400));
            }
            
            const image = req.file.filename;
            const { heading, description} = req.body;
  

            const TeamData = new ServicesModel({
              heading, description,
              image:`services/${image}`,
            });
      
            const services = await ServicesModel.create(TeamData);
      
            res.status(201).json({
              success: true,
              services,
              message:'successfully! services added',
            });
          
        } catch (error) {
          return next(new ErrorHandler(error, 400));
        }
      });

// load All-Services 
exports.getallServices = catchAsyncError(async (req, res, next) => {
  const services = await ServicesModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    services,
  });
});

// delete Single-Blog
exports.deleteServices = catchAsyncError(async (req,res,next) => {
  try {
    let services = await ServicesModel.findById(req.params.id);
    if(!services){
      return next(new ErrorHandler("data not found ", 400));
    }

        // delete image from upload folder 
        const imagePath = path.join(uploadsPath, services.image);
        fs.unlinkSync(imagePath);
       await services.deleteOne();

    res.status(200).json({
      success: true,
      message: 'data deleted!',
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})



// Update Services
exports.updateServices = catchAsyncError(async (req, res, next) => {

  let service = await ServicesModel.findById(req.params.id);

  if (!service) {
    return next(new ErrorHandler("Data not found", 400));
  }

  const { heading, description} = req.body;

   if (!req.file || !req.file.filename) {
      return next(new ErrorHandler("No File Recived", 400));
    }  
    const image = req.file.filename;   
    const oldImagePath = path.join(uploadsPath, service.image);
    fs.unlinkSync(oldImagePath);

  const ServicesData = {
    heading, description,
    image:`services/${image}`,
  };
  await ServicesModel.findByIdAndUpdate(req.params.id, ServicesData);



  res.status(201).json({
    success: true,
    message: "details Updated!",
  });
});
