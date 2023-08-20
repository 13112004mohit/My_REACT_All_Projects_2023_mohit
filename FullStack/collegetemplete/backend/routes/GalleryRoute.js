const express = require("express");
const {
        createImage, getallImages,
        deleteImage,        
} = require("../controller/GalleryController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();

router.route("/allimages").get(getallImages);

router.route("/createimage").post(isAuthenticatedUser,createImage);

router
  .route("/deleteimage/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"), deleteImage);

// router
//   .route("/admin/products/:id")
//   .put(isAuthenticatedUser, isAdmin("admin"), updateproduct);



module.exports = router;
