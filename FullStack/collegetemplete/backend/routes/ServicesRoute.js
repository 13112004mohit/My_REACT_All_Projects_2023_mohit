const express = require("express");
const {
        createServices,
  getallServices,
  deleteServices,
  updateServices,
} = require("../controller/ServicesController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();
const path = require("path");
const MulterUploads = require("../utils/MulterUploads");

// image storeage route path
const uploadsPath = path.join(__dirname, '../uploads/services');
const upload = MulterUploads(uploadsPath)

router.route("/allservices").get(getallServices);

router.route("/createservice").post(isAuthenticatedUser,upload.single('file'),createServices);

router
  .route("/deleteservices/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"), deleteServices);

router
  .route("/updateservices/:id")
  .put(isAuthenticatedUser, isAdmin("admin"), upload.single('file'),updateServices);



module.exports = router;
