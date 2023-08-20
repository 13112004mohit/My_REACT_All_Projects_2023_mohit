const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const NewPictureModel = require("../model/NewPictureModel");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
const path = require("path");

// Image CURD route path
const uploadsPath = path.join(__dirname, "../uploads/");

exports.createNewPicture = catchAsyncError(async (req, res, next) => {
  try {
    if (!req.file || !req.file.filename) {
      return next(new ErrorHandler("No File Recived ", 400));
    }

    const image = req.file.filename;

    const PictureData = new NewPictureModel({
      heading: req.body.heading,
      image: `newpicture/${image}`,
      createdby: [
        {
          user: req.user._id, // Assuming you are using Passport or similar authentication middleware to get the user
          name: req.user.name, // Set the name of the user who created the blog
          image: req.user.avatar || "nimg", // Set the image URL of the user who created the blog
        },
      ],
    });

    const newpicture = await NewPictureModel.create(PictureData);

    res.status(201).json({
      success: true,
      newpicture,
      message: "Successfully! Picture created",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// load All-NewPictures
exports.getallNewPicture = catchAsyncError(async (req, res, next) => {
  const newpicture = await NewPictureModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    newpicture,
  });
});

// delete Single-Picture
exports.deleteNewPicture = catchAsyncError(async (req, res, next) => {
  try {
    let newpicture = await NewPictureModel.findById(req.params.id);
    if (!newpicture) {
      return next(new ErrorHandler("Picture not found ", 400));
    }

    // delete image from upload folder
    const imagePath = path.join(uploadsPath, newpicture.image);
    if (fs.existsSync(imagePath)) {
      // delte image from upload folder
      fs.unlinkSync(imagePath);
    }
    await newpicture.deleteOne();

    res.status(200).json({
      success: true,
      message: "Picture deleted!",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
