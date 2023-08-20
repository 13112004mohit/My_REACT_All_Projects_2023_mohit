const express = require("express");
const {
        createHeroBanner, getallHero,
        deleteHeroBanner,        
} = require("../controller/HeroController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();
const path = require("path");
const MulterUploads = require("../utils/MulterUploads");

// image storeage route path
const uploadsPath = path.join(__dirname, '../uploads/banner');
const upload = MulterUploads(uploadsPath)

router.route("/allhero").get(getallHero);

router.route("/createbanner").post(isAuthenticatedUser, upload.array('file'),createHeroBanner);

router
  .route("/deletebanner/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"), deleteHeroBanner);



module.exports = router;
