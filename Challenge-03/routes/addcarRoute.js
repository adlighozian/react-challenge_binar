const router = require("express").Router();
const page = require ("../controllers/addcarController");

router.get("/addcar",page.home);

module.exports = router;