const express = require("express");
const { addUser } = require("../controllers/userController.js");

const router = express.Router();

router.route("/").post(addUser);

module.exports = router;
