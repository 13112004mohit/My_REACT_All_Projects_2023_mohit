const express = require("express");
const {
  createNewPicture, getallNewPicture,
  deleteNewPicture,        
} = require("../controller/NewPictureController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();
const path = require("path");
const MulterUploads = require("../utils/MulterUploads");

// image storeage route path
const uploadsPath = path.join(__dirname, '../uploads/newpicture');
const upload = MulterUploads(uploadsPath)


router.route("/allnewpicture").get(getallNewPicture);

router.route("/createnewpicture").post(isAuthenticatedUser,upload.single('file'),createNewPicture);

router
  .route("/deletenewpicture/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"), deleteNewPicture);

// router
//   .route("/admin/products/:id")
//   .put(isAuthenticatedUser, isAdmin("admin"), updateproduct);



module.exports = router;
