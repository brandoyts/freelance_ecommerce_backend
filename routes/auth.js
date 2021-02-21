const express = require("express");
const router = express.Router();

const {
	signup,
	signin,
	forgot1, // STEP 1
	signout,
	requireSignin,
} = require("../controllers/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot1", forgot1); // STEP 1
router.get("/signout", signout);

router.get("/hello", requireSignin, (req, res) => {
	res.send("hello");
});

module.exports = router;
