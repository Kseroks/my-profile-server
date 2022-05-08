const express = require("express");

const descriptionControl = require("../controllers/api-me-controller");
const router = express.Router();

router.get("/api/descriptions", descriptionControl.getDescription);
module.exports = router;
