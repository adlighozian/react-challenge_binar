// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pages/cars', { title: 'Challenge-02 | Cars', menu: "CARS",list:"List Car" });
// });

// module.exports = router;

const router = require("express").Router();
const page = require ("../controllers/carController");

router.get("/cars",page.home);
module.exports = router;
