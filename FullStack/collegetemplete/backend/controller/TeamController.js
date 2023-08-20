const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const TeamModel = require("../model/TeamModel");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require('fs');
const path = require("path");


// Image CURD route path
const uploadsPath = path.join(__dirname, '../uploads/');

exports.CreateTeam = catchAsyncError(async (req, res, next) => {  
         
        try {
          if (!req.file ||!req.file.filename) {
            return next(new ErrorHandler("No File Recived ", 400));
          }
          
          const image = req.file.filename;
         
            const { name, position, degree, Whatsapp ,facebook,instagram,twitter,youtube} = req.body;
  
          
            const TeamData = new TeamModel({
              name, position, degree, Whatsapp ,facebook,instagram,twitter,youtube,
              image:`team/${image}`,
            });
      
            const teams = await TeamModel.create(TeamData);
      
            res.status(201).json({
              success: true,
              teams,
              message:'successfully! painter added',
            });
          
        } catch (error) {
          return next(new ErrorHandler(error, 400));
        }
      });

// load All-Services 
exports.getAllTeams = catchAsyncError(async (req, res, next) => {
  const teams = await TeamModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    teams,
  });
});

// delete Single-Painters
exports.deleteTeam = catchAsyncError(async (req,res,next) => {
  try {
    let team = await TeamModel.findById(req.params.id);
    if(!team){
      return next(new ErrorHandler("data not found ", 400));
    }
    
    // delete image from upload folder 
    const imagePath = path.join(uploadsPath, team.image);
    fs.unlinkSync(imagePath);
    await team.deleteOne();

    res.status(200).json({
      success: true,
      message: 'data deleted! ',
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})



// Update Team
exports.updateTeam = catchAsyncError(async (req, res, next) => {
  let team = await TeamModel.findById(req.params.id);

  if (!team) {
    return next(new ErrorHandler("Data not found", 400));
  }

  const { name, position, degree, Whatsapp ,facebook,instagram,twitter,youtube} = req.body;

   if (!req.file || !req.file.filename) {
      return next(new ErrorHandler("No File Recived", 400));
    }  
    const image = req.file.filename; 

    const oldImagePath = path.join(uploadsPath, team.image);
    fs.unlinkSync(oldImagePath);

  const teamData = {
    name, position, degree, Whatsapp ,facebook,instagram,twitter,youtube,
    image:`team/${image}`,
  };
  await TeamModel.findByIdAndUpdate(req.params.id, teamData);



  res.status(201).json({
    success: true,
    message: "details Updated!",
  });
});
