const express = require("express");
const router = express.Router();
const {
        registerUser,
        acccoutActivate,
        loginUser,
        logoutUser,
        ShowAdminInfo,
        forgotPassword,
        resetPassword,
        loadUser,
        getallUsers,
        updateUserInfo,
        updateOldPassword,
        deleteUser,
        updateUserRole,
} = require("../controller/userController");
const { isAuthenticatedUser ,isAdmin} = require("../middleware/auth");
const path = require("path");
const MulterUploads = require("../utils/MulterUploads");

// image storeage route path
const uploadsPath = path.join(__dirname, '../uploads/avatar');
const upload = MulterUploads(uploadsPath)

router.route("/register").post( registerUser);

router.route("/activation/:token").post(acccoutActivate);

router.route("/login").post(loginUser);

router.route("/loaduser").get(isAuthenticatedUser, loadUser);

router.route("/logout").post(logoutUser);

router.route("/allUsers").get(isAuthenticatedUser,isAdmin('admin'),getallUsers);

router.route("/showadmininfo").get(ShowAdminInfo);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").post(resetPassword);

router.route("/updateUserInfo").put(isAuthenticatedUser,upload.single('file'), updateUserInfo);

router.route("/updateOldPassword").put(isAuthenticatedUser, updateOldPassword);

router
  .route("/deleteuser/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"),upload.single('file'), deleteUser);

router
  .route("/updateuserrole/:id")
  .put(isAuthenticatedUser, isAdmin("admin"), updateUserRole);



module.exports = router;