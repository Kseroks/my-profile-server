const express = require("express");

const linkControl = require("../controllers/api-link-controller");
const router = express.Router();

router.get("/api/links", linkControl.getLink);
module.exports = router;
