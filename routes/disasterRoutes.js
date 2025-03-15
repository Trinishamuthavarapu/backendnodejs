const express = require("express");
const { getDisasters, reportDisaster } = require("../controllers/disasterControllers"); // Ensure import

const router = express.Router();

// Define routes
router.get("/disasters", getDisasters);
router.post("/report-disaster", reportDisaster);

module.exports = router;
