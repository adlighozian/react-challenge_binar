const router = require("express").Router();
const page = require ("../controllers/dashboardController");

router.get("/dashboard",page.home);

module.exports = router;