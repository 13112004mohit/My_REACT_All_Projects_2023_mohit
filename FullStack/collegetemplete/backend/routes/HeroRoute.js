const express = require("express");
const {
        createHeroBanner, getallHero,
        deleteHeroBanner,        
} = require("../controller/HeroController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();

router.route("/allhero").get(getallHero);

router.route("/createbanner").post(isAuthenticatedUser,createHeroBanner);

router
  .route("/deletebanner/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"), deleteHeroBanner);

// router
//   .route("/admin/products/:id")
//   .put(isAuthenticatedUser, isAdmin("admin"), updateproduct);



module.exports = router;
