const router = require("express").Router();
const page = require ("../controllers/carController");

router.get("/cars",page.home);

module.exports = router;
