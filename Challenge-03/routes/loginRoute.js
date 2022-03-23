const router = require("express").Router();
const page = require ("../controllers/loginController");

router.get("/",page.home);

module.exports = router;
