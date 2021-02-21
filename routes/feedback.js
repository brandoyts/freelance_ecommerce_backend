const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const {
	pendingFeedback,
	updateFeedback,
	deleteFeedback,
	createFeedback,
	getPublishedFeedback,
} = require("../controllers/feedback");

router.get("/publishedFeedback", getPublishedFeedback);
router.get("/pendingFeedback", pendingFeedback);
router.post("/createFeedback", createFeedback);
router.post("/updateFeedback/:id", updateFeedback);
router.delete("/deleteFeedback/:id", deleteFeedback);

module.exports = router;
