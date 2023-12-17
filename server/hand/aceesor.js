const express = require("express");
const router = express.Router();

const portal = require("../handler/Portal")


router.use("/portal", portal);

module.exports = router;