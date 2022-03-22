// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pages/dashboard', { title: 'Challenge-02 | Dashboard', menu: "DASHBOARD", list:"DASHBOARD" });
// });

// module.exports = router;

const router = require("express").Router();
const page = require ("../controllers/dashboardController");

router.get("/dashboard",page.home);
module.exports = router;