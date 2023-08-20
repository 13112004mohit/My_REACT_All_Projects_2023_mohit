const express = require("express");
const {
        createImage, getallImages,
        deleteImage,        
} = require("../controller/GalleryController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();
const path = require("path");
const MulterUploads = require("../utils/MulterUploads");

// image storeage route path
const uploadsPath = path.join(__dirname, '../uploads/gallery');
const upload = MulterUploads(uploadsPath)

router.route("/allimages").get(getallImages);

router.route("/createimage").post(isAuthenticatedUser, upload.array('file'), createImage);

router
  .route("/deleteimage/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"), deleteImage);

// router
//   .route("/admin/products/:id")
//   .put(isAuthenticatedUser, isAdmin("admin"), updateproduct);



module.exports = router;
