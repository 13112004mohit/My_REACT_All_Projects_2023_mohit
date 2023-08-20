const express = require("express");
const {
        CreateTeam,
  getAllTeams,
  deleteTeam,
  updateTeam,
} = require("../controller/TeamController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();
const path = require("path");
const MulterUploads = require("../utils/MulterUploads");

// image storeage route path
const uploadsPath = path.join(__dirname, '../uploads/team');
const upload = MulterUploads(uploadsPath)

router.route("/allteams").get(getAllTeams);

router.route("/createteam").post(isAuthenticatedUser,upload.single('file'),CreateTeam);

router
  .route("/deleteteam/:id")
  .delete(isAuthenticatedUser, isAdmin("admin"), deleteTeam);

router
  .route("/updateteam/:id")
  .put(isAuthenticatedUser, isAdmin("admin"), upload.single('file'), updateTeam);



module.exports = router;
