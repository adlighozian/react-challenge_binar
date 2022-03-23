const router = require("express").Router();
const page = require ("../controllers/editcarController");

router.get("/editcar",page.home);

module.exports = router;
