const express = require("express");
const router = express.Router();
const {
        registerSeller,
        ActivateShop,
        loginSeller,
        logoutSeller,
        loadSeller,
        
} = require("../controller/shopController");
const { isAuthenticatedUser ,isSeller} = require("../middleware/auth");

router.route("/shop/create-shop").post(registerSeller);

router.route("/shop/activation/:token").post(ActivateShop);

router.route("/shop/login-shop").post(loginSeller);

router.route("/shop/loadseller").get(isSeller,  loadSeller);

router.route("/shop/logout-shop").post(logoutSeller);

module.exports = router;